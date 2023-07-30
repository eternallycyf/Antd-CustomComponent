import ProcessPage from '@/components/CommonCard/ProcessPage';
import { IProcessPageProps } from '@/components/CommonCard/ProcessPage/interface';
import {
  FLOW_STATUS,
  FLOW_STATUS_COLOR,
  getFlowDetailInfo,
  getStatusMc,
  handleRouterToCenter,
  IProcessProps,
  IStateFlowStatus,
  routerToDetailPage,
  routerToOaLinkUrl,
} from '@/components/CommonCard/ProcessPage/utils';
import projectConfig from '@/config/projectConfig';
import { withRouter } from '@/core/Enhance/withRouter';
import useFlowMatchParams from '@/hook/useFlowMatchParams';
import { fetchUserInfo } from '@/services';
import { ConnectState } from '@/typings/connect';
import ErrorMessage from '@/utils/ErrorMessage';
import { getUUID } from '@/utils/random';
import { renderFormItem } from '@/utils/util';
import { connect, history } from '@umijs/max';
import { Col, Form, Skeleton } from 'antd';
import dayjs from 'dayjs';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useAsync } from 'react-use';
import { compose } from 'redux';
import { getFormList } from './config/form';
import styles from './index.less';
const { apiPrefixMock } = projectConfig;

const ProcessPageDemo: FC<IProcessProps> = (props) => {
  //#region
  // TODO: 页面title及路由关键词
  const title = '测试流程';
  const flowPath = 'ProcessPageDemo';
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

    let [subInfo, beseOptions, flowStatus] = getFlowDetailInfo(data);
    const { attachment = [] } = beseOptions;
    const flowStatusMc = getStatusMc(flowStatus);

    beseOptions = parseFormValues(data, beseOptions);

    setFlowStatus([flowStatus, flowStatusMc as any]);
    EditForm.setFieldsValue(beseOptions);
    return subInfo;
  }, []);

  const subTitle = useMemo(() => {
    // TODO 标题格式
    if (status === 'detail') return currentRecord?.title || '--';
    const subData = SubHeaderRef.current.data;
    return `关于【${subData?.realname ?? '--'}】（${subData?.depName ?? '--'}）】的${title}`;
  }, [currentRecord, JSON.stringify(EditForm.getFieldsValue()), num]);
  //#endregion

  //#region
  // 解析接口返回的 data => form.setFieldsValue(data);
  const parseFormValues = (data: any, baseOptions: any) => {
    // TODO: 回显转换格式
    return baseOptions;
  };

  const tranFormValues = (currentStatusMc: IStateFlowStatus[1]) => {
    // TODO: 提交转换格式
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
    // TODO: 请求接口
    const confirmFn = flowStatus?.[1] === '已驳回' ? fetchUserInfo : fetchUserInfo;
    const flowMethods: Record<'已废止' | '草稿中' | '提交', Function> = {
      已废止: confirmFn,
      草稿中: confirmFn,
      提交: confirmFn,
    };

    if (currentStatusMc === '查看0A') return routerToOaLinkUrl(currentRecord?.oaUrl);
    if (currentStatusMc === '编辑') return routerToDetailPage(props, businessId, flowPath);
    if (currentStatusMc === '已废止') {
      const res = await flowMethods['已废止'](businessId);
      ErrorMessage.withName('废止').withResponse(res).widthSuccessCallback(handleRouterToCenter).create();
    }

    let baseOptions = tranFormValues(currentStatusMc);
    if (currentStatusMc === '草稿中') {
      setConfirmLoading(true);
      const res = await flowMethods['草稿中'](baseOptions);
      ErrorMessage.withName('草稿保存')
        .withResponse(res)
        .widthSuccessCallback(handleRouterToCenter)
        .withFinallyCallBack(() => setConfirmLoading(false))
        .create();
    }

    if (currentStatusMc === '提交') {
      await EditForm.validateFields();
      setConfirmLoading(true);
      const res = await flowMethods['提交'](baseOptions);
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
  const ProcessPageProps = {
    title,
    dotText,
    dotColor: FLOW_STATUS_COLOR?.[dotText!],
    className: styles.page,
    extraBtnList,
    handleHeaderOnClick: handleRouterToCenter,
  };
  // TODO: 传递给formList的参数
  const formListParams = {
    status,
    form: EditForm,
    setNumber,
    currentRecord,
  };
  //#endregion

  return (
    <ProcessPage {...ProcessPageProps}>
      <ProcessPage.SubHeader title={title} ref={SubHeaderRef} hasDivider businessId={businessId} formatSubTitle={() => subTitle} />

      <ProcessPage.Card style={{ marginTop: 12 }} title="业务信息" descList={[]}>
        <Skeleton loading={recordLoading}>
          <Form form={EditForm} className={styles[status === 'detail' ? 'plus-detail-formContent' : 'plus-formContent']}>
            {(getFormList(formListParams) || []).map((item: any) => (
              <Col
                span={item['col'] || 24}
                key={item.name || getUUID()}
                className={`${styles[`formItemContent${item.type == 'update' ? 'update' : ''}`]}`}
              >
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
        </Skeleton>
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
