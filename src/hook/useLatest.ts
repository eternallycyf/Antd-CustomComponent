import { useRef } from 'react';

// export default () => {
//   const [count, setCount] = useState(0);
//   const latestCountRef = useLatest(count);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(latestCountRef.current + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <p>count: {count}</p>
//     </>
//   );
// };

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;
