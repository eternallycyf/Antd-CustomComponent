import { message } from 'antd';

type ErrorMessageConfig<T = any> = {
  name: string;
  successCB?: (response: T) => any;
  errorCB?: (response: T) => any;
  finallyCB?: (response: T) => any;
};

export default class ErrorMessage<T = any> {
  public response: T | null = null;
  private config: ErrorMessageConfig = {
    name: '',
    successCB: () => {},
    errorCB: () => {},
    finallyCB: () => {},
  };

  constructor(name?: string) {
    this.config.name = name || '';
  }

  public static withName(name: string): ErrorMessage {
    return new ErrorMessage(name);
  }

  public withResponse(response: any): ErrorMessage {
    this.response = response;
    return this;
  }

  public withFinallyCallBack<T = any>(finallyCB: ErrorMessageConfig<T>['errorCB']): ErrorMessage {
    this.config.finallyCB = finallyCB ? finallyCB : () => {};
    return this;
  }

  public widthErrorCallback<T = any>(errorCB: ErrorMessageConfig<T>['errorCB']): ErrorMessage {
    this.config.errorCB = errorCB ? errorCB : () => {};
    return this;
  }

  public widthSuccessCallback<T = any>(successCB: ErrorMessageConfig<T>['successCB']): ErrorMessage {
    this.config.successCB = successCB ? successCB : () => {};
    return this;
  }

  public async create() {
    const { name, successCB, errorCB, finallyCB } = this.config;
    const response = this.response as any;
    const code = response?.['code'];
    const msg = response?.['msg'];
    const success = response?.['success'];
    try {
      if (code == 200 && code != -1) {
        message.success(`${name || msg}成功`);
        successCB && successCB(response);
        return response;
      }

      if (code == 500 && code != -1) {
        message.error(`${name || msg}失败`);
        errorCB && errorCB(response);
        return response;
      }

      if (success == false && code != -1) {
        message.error(`${name || msg}失败`);
        errorCB && errorCB(response);
        return response;
      }
      finallyCB && finallyCB(response);
      return this.response;
    } catch (error) {
      finallyCB && finallyCB(response);
      return this.response;
    }
  }
}
