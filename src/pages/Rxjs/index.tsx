import { Page } from '@/components/CommonCard';
import * as Rx from 'rxjs';
import { map } from 'rxjs/operators';
import { useObservable, useEventCallback } from 'rxjs-hooks';
import { FormEvent } from 'react';

const IndexPage = () => {
  const observable = new Rx.Observable((subscriber) => {
    try {
      const intervalId = setInterval(() => {
        subscriber.next('hello world');
        subscriber.complete();
      }, 1000);
      return function unsubscribe() {
        clearInterval(intervalId);
      };
    } catch (error) {
      subscriber.error(error);
    }
  });

  const observable2 = Rx.from([1, 2, 3, 4, 5]);

  //  observable.subscribe((value) => console.log(value));
  const subscription = observable2.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('complete'),
    error: (error) => console.log(error),
  });
  subscription.unsubscribe();

  return <Page></Page>;
};

export default IndexPage;
