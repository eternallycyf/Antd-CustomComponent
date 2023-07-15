import dayjs from 'dayjs';

export interface IRecord {
  userName: string;
  time?: dayjs.Dayjs;
  ratio?: number;
}

export interface IFormValues {
  EditTable?: IRecord[];
}

export interface IColumnsExtraRecord {}
