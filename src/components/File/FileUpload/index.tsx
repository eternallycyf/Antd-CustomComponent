// import { withRoutePage } from '@/core/Enhance/withRoutePage';
// import { ConnectState } from '@/typings/connect';
// import { withRouter, connect } from '@umijs/max';
// import { Col, Row, Tooltip } from 'antd';
// import { compose } from 'redux';
// import { IAttachmentList, IFileUploadProps, IOriginFileObj } from './interface';
// import styles from './index.less';
// import { renderTitle } from './utils';
// import FileImage from '../FileImage';
// import dayjs from 'dayjs';

// const FileUpload: React.FC<IFileUploadProps> = (props) => {
//   const { isDetail = true, attachmentList = [], token, actionUrl = '', colNumber = 24, restDownload = false, limitCount = 1 } = props;
//   const xlSpan = colNumber ? colNumber : 8;
//   const mdSpan = 24;

//   const renderDetailTitle = (item: IAttachmentList) => {
//     return (
//       <div className={styles.uploadContent}>
//         <div className={`${styles.paddingWrap} ${styles.upload}`}>{renderTitle(item)}</div>
//       </div>
//     );
//   };

//   const renderDetailContent = (list: IOriginFileObj[]) => {
//     if (!list.length) return null;

//     return (
//       <Col span={24} style={{ marginBottom: 10 }}>
//         <Row gutter={[10, 0]}>
//           {list!.map((subItem, index) => {
//             const fileName = subItem.fileName || subItem.fdFileName;

//             return (
//               <Col key={index} className={styles.addachmentItem} xl={xlSpan} md={mdSpan}>
//                 <div className={styles.attchment}>
//                   <div className={styles.fileInfo}>
//                     <div className={styles.fileName}>
//                       <FileImage fileName={fileName ?? ''} style={{ marginRight: 8 }} />
//                       <Tooltip title={fileName}>
//                         <span style={{ flex: 1 }} className="ellipsis">
//                           {fileName}
//                         </span>
//                         {subItem?.fileName && (
//                           <div className={styles.fileTime}>生效时间：{subItem.uploadDatetime || dayjs().format('YYYY-MM-DD')}</div>
//                         )}
//                       </Tooltip>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             );
//           })}
//         </Row>
//       </Col>
//     );
//   };

//   return <Row style={{ marginTop: 12 }}></Row>;
// };

// export default compose<typeof FileUpload>(
//   withRoutePage,
//   withRouter,
//   connect(({ global, login }: ConnectState) => login),
// )(FileUpload);

export default () => null;
