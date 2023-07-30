import projectConfig from '@/config/projectConfig';
import { ISearchesType } from '@/typings';
import { BOOLEAN_DICT, getRequireRules, zzsm_tip } from '@/components/CommonCard/ProcessPage/utils';
import { ProcessPage } from '@/components/CommonCard';
import styles from '../index.less';
const { apiPrefixMock } = projectConfig;

const ITEM_PROPS = {
  labelAlign: 'left' as const,
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
      dict: BOOLEAN_DICT,
      allowClear: true,
      itemProps: ITEM_PROPS,
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
                rules: getRequireRules('项目编号'),
                className: styles.formItemContent,
                itemProps: ITEM_PROPS,
                col: 24,
                controlProps: {
                  style: {
                    width: '100%',
                  },
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
      itemProps: { noStyle: true },
      Component: () => <ProcessPage.Card title="流程附件" descList={zzsm_tip} />,
    },
    {
      type: 'update',
      name: 'attachment',
      col: 24,
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
