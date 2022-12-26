class PubSub {
  protected handles: any;

  constructor() {
    this.handles = {};
  }

  on(eventType: string, handle: any) {
    if (typeof handle !== 'function')
      throw new Error('handle must be a function');
    if (!this.handles.hasOwnProperty(eventType)) this.handles[eventType] = [];
    this.handles[eventType].push(handle);
    return this;
  }

  emit(eventType: string, ...args: any[]) {
    if (!this.handles.hasOwnProperty(eventType))
      throw new Error('eventType is not exist');
    this.handles[eventType].forEach((item: any) => item.apply(null, args));
    return this;
  }

  off(eventType: string, handle: any) {
    if (!this.handles.hasOwnProperty(eventType))
      throw new Error('eventType is not exist');
    if (typeof handle !== 'function')
      throw new Error('handle must be a function');
    this.handles[eventType].forEach(
      (item: any, key: number, arr: any[]) =>
        item === handle && arr.splice(key, 1),
    );
    return this;
  }
}

export default new PubSub();
