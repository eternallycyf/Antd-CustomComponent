import { useRef, useEffect } from 'react';

type Subscription<T> = (val: T) => void;

export class EventEmitter<T> {
  private subscriptions = new Set<Subscription<T>>();

  emit = (val: T) => {
    for (const subscription of this.subscriptions) {
      subscription(val);
    }
  };

  useSubscription = (callback: Subscription<T>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const callbackRef = useRef<Subscription<T>>();
    callbackRef.current = callback;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      function subscription(val: T) {
        if (callbackRef.current) {
          callbackRef.current(val);
        }
      }
      this.subscriptions.add(subscription);
      return () => {
        this.subscriptions.delete(subscription);
      };
    }, []);
  };
}

export default function useEventEmitter<T = void>() {
  const ref = useRef<EventEmitter<T>>();
  if (!ref.current) {
    ref.current = new EventEmitter();
  }
  return ref.current;
}

// /**
//  * title: Parent component shares a event
//  * desc: The parent component creates a `focus$` event emitter, and passes it to its children. When calling `focus$.emit` in MessageBox, InputBox will get notified.
//  *
//  * title.zh-CN: 父组件向子组件共享事件
//  * desc.zh-CN: 父组件创建了一个 `focus$` 事件，并且将它传递给了两个子组件。在 MessageBox 中调用 `focus$.emit` ，InputBox 组件就可以收到通知。
//  */
// const MessageBox: FC<{
//   focus$: EventEmitter<void>;
// }> = function (props) {
//   return (
//     <div style={{ paddingBottom: 24 }}>
//       <p>You received a message</p>
//       <button
//         type="button"
//         onClick={() => {
//           props.focus$.emit();
//         }}
//       >
//         Reply
//       </button>
//     </div>
//   );
// };

// const InputBox: FC<{
//   focus$: EventEmitter<void>;
// }> = function (props) {
//   const inputRef = useRef<any>();
//   props.focus$.useSubscription(() => {
//     inputRef.current.focus();
//   });
//   return (
//     <input ref={inputRef} placeholder="Enter reply" style={{ width: '100%', padding: '4px' }} />
//   );
// };

// export default function () {
//   const focus$ = useEventEmitter();
//   return (
//     <>
//       <MessageBox focus$={focus$} />
//       <InputBox focus$={focus$} />
//     </>
//   );
// }
