import projectConfig from '@/config/projectConfig';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Col, Form } from 'antd';
import { FLOW_STATUS, FLOW_STATUS_COLOR, handleRouterToCenter, IProcessProps, IStateFlowStatus } from '@/components/CommonCard/ProcessPage/utils';
import ProcessPage from '@/components/CommonCard/ProcessPage';
import useFlowMatchParams from '@/hook/useFlowMatchParams';
import { useAsync } from 'react-use';
import { fetchUserInfo } from '@/services';
import dayjs from 'dayjs';
import { connect, history } from '@umijs/max';
import ErrorMessage from '@/utils/ErrorMessage';
import { IProcessPageProps } from '@/components/CommonCard/ProcessPage/interface';
import styles from './index.less';
import { getFormList } from './config/form';
import { getUUID } from '@/utils/random';
import { renderFormItem } from '@/utils/util';
import { compose } from 'redux';
import { withRouter } from '@/core/Enhance/withRouter';
import { ConnectState } from '@/typings/connect';
const { apiPrefixMock } = projectConfig;

const ProcessPageDemo: FC<IProcessProps> = (props) => {
  //#region
  const title = '测试流程';
  const { businessId = '', status } = useFlowMatchParams({ ...props, flowPath: 'demo' });

  const EditForm = Form.useForm()[0];
  const SubHeaderRef = useRef<React.ElementRef<typeof ProcessPage.SubHeader>>(null!);
  const [num, setNumber] = useState<number>(0);

  const [flowStatus, setFlowStatus] = useState<IStateFlowStatus | []>([]);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  //#endregion

  //#region
  useEffect(() => {}, []);
  //#endregion

  //#region
  const { value: currentRecord, loading: recordLoading } = useAsync(async () => {
    //@ts-ignore
    const { data } = await fetchUserInfo({ businessId });
    let subInfo = {
      title: data?.fdSubject,
      realname: data?.sqr,
      deptName: data?.sqrbm,
      mobile: data?.lxdh,
      applyTime: data?.sqs ?? dayjs().format('YYYY-MM-DD HH:mm:ss'),
      oaUrl: data?.oaUrl,
      attachment: data?.fileData.map((item: any) => ({
        ...item,
        percent: 100,
        status: 'done',
      })),
    };

    let beseOptions = {
      ...data?.mainData,
      attachment: subInfo.attachment,
    };
    const statusMc = Object.entries(FLOW_STATUS).filter(([key, val]) => val == data?.status)?.[0]?.[0];
    setFlowStatus([data?.status, statusMc as any]);
    EditForm.setFieldsValue(beseOptions);
    return subInfo;
  }, []);

  const subTitle = useMemo(() => {
    if (status === 'detail') return currentRecord?.title || '--';
    const subData = SubHeaderRef.current.data;
    return `关于【${subData?.realname ?? '--'}】（${subData?.depName ?? '--'}）】的${title}`;
  }, [currentRecord, JSON.stringify(EditForm.getFieldsValue()), num]);
  //#endregion

  //#region
  const tranFormValues = (currentStatusMc: IStateFlowStatus[1]) => {
    const values = EditForm.getFieldsValue();
    let baseOptions = { ...values };
    if (status === 'edit') baseOptions = { ...baseOptions, businessId };
    if (currentStatusMc === '草稿中' || currentStatusMc === '提交') {
      baseOptions = { ...baseOptions, title: subTitle };
    }
    return baseOptions;
  };

  const handleConfirm = async (currentStatusMc: IStateFlowStatus[1]) => {
    const currentStatus = FLOW_STATUS[currentStatusMc];
    let baseOptions = tranFormValues(currentStatusMc);

    if (currentStatusMc === '查看0A') {
      window.open(currentRecord?.oaUrl, '_blank');
    }

    if (currentStatusMc === '编辑') {
      //@ts-ignore
      window.closeTab(props.match.url);
      return history.push('/demo');
    }

    if (currentStatusMc === '已废止') {
      const res = await fetchUserInfo(businessId);
      ErrorMessage.withName('废止').withResponse(res).widthSuccessCallback(handleRouterToCenter).create();
    }

    if (currentStatusMc === '草稿中') {
      setConfirmLoading(true);
      const res = await fetchUserInfo(baseOptions);
      ErrorMessage.withName('草稿保存')
        .withResponse(res)
        .widthSuccessCallback(handleRouterToCenter)
        .withFinallyCallBack(() => setConfirmLoading(false))
        .create();
    }

    if (currentStatusMc === '提交') {
      await EditForm.validateFields();
      setConfirmLoading(true);
      const fn = flowStatus?.[1] === '已驳回' ? fetchUserInfo : fetchUserInfo;
      const res = await fn(baseOptions);
      ErrorMessage.withName('提交')
        .withResponse(res)
        .widthSuccessCallback(handleRouterToCenter)
        .withFinallyCallBack(() => setConfirmLoading(false))
        .create();
    }

    setConfirmLoading(false);
  };

  // 废止 查看OA 暂存 编辑 提交
  const extraBtnList: IProcessPageProps['extraBtnList'] = [
    {
      text: '废止',
      type: 'default',
      buttonType: 'delete',
      buttonStyleType: 'danger' as 'danger',
      deleteText: '点击废止将会修改流程状态为已废止，废止后不可重新提交该流程，请确认是否废止',
      onClick: () => handleConfirm('已废止'),
      visible: flowStatus?.[0] === FLOW_STATUS['已驳回'],
    },
    {
      text: '查看OA',
      type: 'default',
      buttonType: 'default' as 'default',
      buttonStyleType: 'default' as 'default',
      onClick: () => handleConfirm('查看0A'),
      visible:
        status === 'detail' &&
        (flowStatus?.[0] === FLOW_STATUS['审批中'] ||
          flowStatus?.[0] === FLOW_STATUS['已结束'] ||
          flowStatus?.[0] === FLOW_STATUS['已废止'] ||
          flowStatus?.[0] === FLOW_STATUS['已驳回']),
    },
    {
      text: '暂存',
      type: 'default' as 'default',
      buttonType: 'default' as 'default',
      buttonStyleType: 'default' as 'default',
      onClick: () => handleConfirm('草稿中'),
      visible: () => status === 'add' || (status === 'edit' && flowStatus?.[0] && flowStatus?.[0] === FLOW_STATUS['草稿中']),
    },
    {
      text: '编辑',
      type: 'default' as 'default',
      buttonType: 'default' as 'default',
      buttonStyleType: 'default' as 'default',
      onClick: () => handleConfirm('编辑'),
      visible: () => status === 'detail' && (flowStatus?.[0] === FLOW_STATUS['草稿中'] || flowStatus?.[0] === FLOW_STATUS['已驳回']),
    },
    {
      text: '提交',
      type: 'default' as 'default',
      buttonStyleType: 'primary' as 'primary',
      loading: confirmLoading,
      onClick: () => handleConfirm('提交'),
      visible: () => status != 'detail' && flowStatus?.[1] === '审批中',
    },
  ];
  //#endregion

  //#region
  const dotText = status === 'add' ? '发起流程' : flowStatus?.[1];
  const formListParams = {
    status,
    form: EditForm,
    setNumber,
    currentRecord,
  };
  //#endregion

  return (
    <ProcessPage
      title={title}
      dotText={dotText}
      dotColor={FLOW_STATUS_COLOR?.[dotText!]}
      className={styles.page}
      extraBtnList={extraBtnList}
      handleHeaderOnClick={handleRouterToCenter}
    >
      <ProcessPage.SubHeader title={title} ref={SubHeaderRef} hasDivider businessId={businessId} formatSubTitle={() => subTitle} />

      <ProcessPage.Card style={{ marginTop: 12 }} title="业务信息" descList={[]}>
        <Form form={EditForm} className={styles[status === 'detail' ? 'plus-detail-formContent' : 'plus-formContent']}>
          {(getFormList(formListParams) || []).map((item: any) => (
            <Col span={item['col'] || 24} key={item.name || getUUID()}>
              <Form.Item
                labelAlign="left"
                label={item.label}
                name={item.name}
                rules={item?.rules || []}
                initialValue={item?.initialValue || undefined}
                {...item.layout}
                {...item.itemProps}
              >
                {renderFormItem(item)}
              </Form.Item>
            </Col>
          ))}
        </Form>
      </ProcessPage.Card>

      <ProcessPage.Card title="审批日志" visible={status == 'detail'}>
        <ProcessPage.Record businessId={businessId} />
      </ProcessPage.Card>
    </ProcessPage>
  );
};

export default compose<typeof ProcessPageDemo>(
  withRouter,
  connect(({ global, login }: ConnectState) => ({ ...login, ...global })),
)(ProcessPageDemo);
