import Detail from './Detail';
import CompoundedComponent from './FileUpload';

type CompoundedComponent = typeof CompoundedComponent & {
  Detail: typeof Detail;
};

const FileUpload = CompoundedComponent as CompoundedComponent;

FileUpload.Detail = Detail;

export default FileUpload;
