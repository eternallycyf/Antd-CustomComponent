interface IFormatValues {
  [key: string]: string | number;
}
declare const formatMessage: (
  { id }: { id: string },
  values?: IFormatValues,
) => any;
declare const getLocale: () => string;
declare const setLocale: (lang: string) => string;
declare class FormattedMessage extends React.Component<
  {
    id: string;
    values?: IFormatValues;
  },
  any
> {
  render(): JSX.Element;
}

declare module 'umi/locale' {
  export const formatMessage: () => null;
  export const setLocale: () => null;
  export const getLocale: () => null;
  export const FormattedMessage: () => null;
}
