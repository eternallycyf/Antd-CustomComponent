import FileView from '@/components/FileViewer/demo/demo';
import { KeepAliveTransfer } from '@/core/base/KeepAlive';
import { withRoutePage } from '@/core/Enhance/withRoutePage';
import { withRouter } from '@umijs/max';
import { compose } from 'redux';

const IndexPage = () => {
  return <FileView />;
};

export default compose(withRoutePage, withRouter, KeepAliveTransfer)(IndexPage);
