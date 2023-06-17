import CompoundedComponent from './ProcessPage';
import ProcessPageCard from './ProcessPageCard';
import ProcessPageDesc from './ProcessPageDesc';
import ProcessPageDetail from './ProcessPageDetail';
import ProcessPageDetailHeader from './ProcessPageDetailHeader';
import ProcessPageDetailRecord from './ProcessPageDetailRecord';
import ProcessPageTable from './ProcessPageTable';

type CompoundedComponent = typeof CompoundedComponent & {
  Card: typeof ProcessPageCard;
  Desc: typeof ProcessPageDesc;
  Table: typeof ProcessPageTable;
  Detail: typeof ProcessPageDetail;
  SubHeader: typeof ProcessPageDetailHeader;
  Record: typeof ProcessPageDetailRecord;
};

const ProcessPage = CompoundedComponent as CompoundedComponent;

ProcessPage.Card = ProcessPageCard;
ProcessPage.Desc = ProcessPageDesc;
ProcessPage.Table = ProcessPageTable;
ProcessPage.Detail = ProcessPageDetail;
ProcessPage.SubHeader = ProcessPageDetailHeader;
ProcessPage.Record = ProcessPageDetailRecord;

export default ProcessPage;
