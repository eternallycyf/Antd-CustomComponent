import projectConfig from '@/config/projectConfig';
import { ISearchesType } from '@/typings';
import { BOOLEAN_DICT, zzsm_tip } from '@/components/CommonCard/ProcessPage/utils';
import { ProcessPage } from '@/components/CommonCard';
const { apiPrefixMock } = projectConfig;

export const BUSI_TYPE_DICT = [
  { text: '申请', value: '1' },
  { text: '退出', value: '2' },
] as const;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const ITEM_PROPS = {
  style: {
    marginBottom: 5,
    width: '100%',
  },
};

export const getFormList = (params: any): ISearchesType => {
  const {} = params;
  return [
    {
      name: 'flag',
      label: 'radio',
      type: 'radio',
      col: 24,
      layout: formItemLayout,
      dict: BOOLEAN_DICT,
      allowClear: true,
      itemProps: {
        labelAlign: 'left',
        style: {
          marginBottom: 0,
          marginTop: 2,
        },
      },
    },
    {
      type: 'update',
      itemProps: {
        noStyle: true,
        shouldUpdate: (pre, cru) => pre?.flag != cru?.flag,
        next: (values, form) => {
          if (values?.flag === 1) {
            return [
              {
                name: 'projectNo',
                label: '项目编号',
                type: 'input',
                allowClear: true,
                col: 8,
                rules: [],
                itemProps: {
                  labelAlign: 'left',
                },
              },
            ] as ISearchesType;
          }
          return false;
        },
      },
    },
    {
      name: 'layout',
      type: 'custom',
      col: 24,
      itemProps: {
        noStyle: true,
      },
      Component: () => {
        return <ProcessPage.Card title="流程附件" descList={zzsm_tip} />;
      },
    },
    {
      type: 'update',
      itemProps: {
        noStyle: true,
        shouldUpdate: () => true,
        next: (values) => {
          const isRequired = false;
          return [
            {
              name: 'attachment',
              type: 'fileUpload',
              itemProps: {
                ...ITEM_PROPS,
                rules: [
                  {
                    validator: (_: any, fileList: any[]) => {
                      if (!isRequired) return Promise.resolve();
                      if (fileList && fileList.length === 0) return Promise.reject('请上传附件');
                      return Promise.reject(new Error('上传流程附件！'));
                    },
                  },
                ],
              },
              col: 24,
              controlProps: {
                attachment: {
                  label: '流程附件上传',
                  isRequired,
                  extraRecord: {
                    fdEntityKey: 'attachment',
                  },
                },
                fileKeys: {
                  fileName: 'fdFileName',
                  fileId: 'fdExternalAttachId',
                },
                isDetail: false,
                isDownloadByS3: false,
                actionUrl: `${apiPrefixMock}/zuul/ims/flow/field/uploadFlowFile`,
                colNumber: 8,
              },
            },
          ] as ISearchesType;
        },
      },
    },
  ];
};
