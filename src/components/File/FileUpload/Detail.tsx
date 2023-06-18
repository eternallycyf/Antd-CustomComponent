import TableBtn from '@/components/CommonTableV5/components/widgets/TableBtn';
import CustomTooltip from '@/components/CustomTooltip/CustomTooltip';
import FileView from '@/components/File/FileViewer';
import projectConfig from '@/config/projectConfig';
import { LoadingOutlined } from '@ant-design/icons';
import { Col, Progress, Row, Spin } from 'antd';
import dayjs from 'dayjs';
import { FC } from 'react';
import FileImage from '../FileImage';
import { handleDownload as handleDownloadByDefault, postDownloadFile } from '../FileViewerV1/demo/utils';
import styles from './index.less';
import { IFileListExtraRecord, IFileUploadDetailProps } from './interface';
import { handleAttachmentDelete, handleAttachmentReplace, Icon } from './utils';
const { apiPrefixMock } = projectConfig;

const Detail: FC<IFileUploadDetailProps> = (props) => {
  const { isDetail, colNumber, fileList = [], setFileList, setReplaceIndex, uploadRef, fileKeys, isDownloadByS3 } = props;

  const _getPercent = (item: any) => {
    return item?.percent == undefined ? 100 : item?.status == 'uploading' && item?.percent == 100 ? 90 : item?.percent;
  };

  const handleReplace = (index: number) => {
    handleAttachmentReplace({ index, fileKeys, ...props });
  };

  const handleDelete = (item: IFileListExtraRecord) => {
    handleAttachmentDelete({ fileKeys, [fileKeys!.fileId!]: item?.[fileKeys?.fileId!], ...props });
  };

  const getViewUrl = (item: IFileListExtraRecord) => {
    return isDownloadByS3 ? `/ims-base/file/downloadByUrl?url=${item?.[fileKeys?.url!]}` : `/ims/org/cust/dowwnload?id=${item?.[fileKeys?.fileId!]}`;
  };

  const handleDownload = (item: IFileListExtraRecord) => {
    return isDownloadByS3
      ? postDownloadFile(item?.[fileKeys?.url!], item?.fdFileName || item?.[fileKeys?.fileName!])
      : handleDownloadByDefault(
          { id: item?.[fileKeys?.fileName!] },
          {
            url: `${apiPrefixMock}/ims/org/cust/dowwnload`,
            fileName: item?.fdFileName || item?.[fileKeys?.fileName!],
          },
        );
  };

  const renderContent = (item: IFileListExtraRecord, index: number) => {
    const getDeleteIcon = () => {
      if (isDetail || !item?.[fileKeys?.fileId!]) return null;

      if (item?.status == 'done')
        return (
          <span>
            <span className={styles.success}>
              <Icon path="success" />
            </span>
            <span className={styles.delete} onClick={() => handleDelete(item)}>
              <Icon path="delete" />
            </span>
          </span>
        );
      return <Spin indicator={<LoadingOutlined />} spinning size="small" />;
    };

    return (
      <Row className={styles.DetailCard} justify="space-between" align="middle">
        <Col>
          <Row gutter={[12, 24]} justify="space-between" align="middle">
            <Col>
              <FileImage fileName={item?.[fileKeys?.fileName!] ?? '--'} />
            </Col>
            <Col>
              <Row>
                <CustomTooltip maxLength={20} text={item?.[fileKeys?.fileName!] ?? '--'} paragraphClassName={styles.fileName} />
              </Row>
              {item?.[fileKeys?.fileName!] && (
                <Row>
                  <CustomTooltip
                    maxLength={20}
                    text={`生效时间： ${item?.[fileKeys?.updateTime!] || dayjs().format('YYYY-MM-DD')}`}
                    paragraphClassName={styles.time}
                  />
                </Row>
              )}
            </Col>
          </Row>
        </Col>
        <Col>
          <TableBtn
            button={[
              {
                text: <FileView fileInfo={{ fileName: item?.fileName || item?.[fileKeys?.fileName!] }} wrapper={<Icon path="view" />} />,
                buttonType: 'custom',
              },
              {
                text: <Icon path="replace" onClick={() => handleReplace(index)} />,
                buttonType: 'custom',
                visible: () => item?.[fileKeys?.fileId!] && item?.status !== 'uploading' && !isDetail,
              },
              {
                text: <Icon path="download" onClick={() => handleDownload(item)} />,
                buttonType: 'custom',
              },
              {
                text: getDeleteIcon(),
                buttonType: 'custom',
                visible: () => item?.flowId && item?.status !== 'uploading' && !isDetail,
              },
            ]}
          />
        </Col>
        {!isDetail && <Progress className={styles.progress} showInfo={false} strokeWidth={2} percent={_getPercent(item)} status="active" />}
      </Row>
    );
  };

  if (!fileList || fileList?.length === 0) return null;

  return (
    <Row className={styles.Detail} gutter={[12, 12]} justify="start" align="middle" wrap>
      {(fileList || []).map((item, index) => {
        return (
          <Col md={colNumber || 24} xs={24} sm={24} key={index}>
            {renderContent(item, index)}
          </Col>
        );
      })}
    </Row>
  );
};

export default Detail;
