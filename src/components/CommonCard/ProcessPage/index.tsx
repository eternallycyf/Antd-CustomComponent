import CompoundedComponent from './ProcessPage';
import ProcessPageCard from './ProcessPageCard';
import ProcessPageHeader from './ProcessPageHeader';
import ProcessPageRecord from './ProcessPageRecord';

type CompoundedComponent = typeof CompoundedComponent & {
  Card: typeof ProcessPageCard;
  SubHeader: typeof ProcessPageHeader;
  Record: typeof ProcessPageRecord;
};

const ProcessPage = CompoundedComponent as CompoundedComponent;

ProcessPage.Card = ProcessPageCard;
ProcessPage.SubHeader = ProcessPageHeader;
ProcessPage.Record = ProcessPageRecord;

export default ProcessPage;
