import { Page } from '@/components';
import * as Rx from 'rxjs';
import { map } from 'rxjs/operators';
import { useObservable, useEventCallback } from 'rxjs-hooks';
import { FormEvent } from 'react';

const IndexPage = () => {
  const observable = new Rx.Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  console.log('just before subscribe');
  observable.subscribe({
    next(x) {
      console.log('got value ' + x);
    },
    error(err) {
      console.error('something wrong occurred: ' + err);
    },
    complete() {
      console.log('done');
    },
  });
  console.log('just after subscribe');

  return <Page></Page>;
};

export default IndexPage;
