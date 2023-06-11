import dayjs from 'dayjs';

export interface IRecord {
  userName: string;
  time?: dayjs.Dayjs;
  age?: number;
}

export interface IFormValues {
  EditTable?: IRecord[];
}

export interface IColumnsExtraRecord {}
