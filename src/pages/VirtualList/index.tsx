import useVirtualList from "@/hook/useVirtualList";
import { useRef, useState, type FC } from "react";
import useDefer from "./useDefer";

interface IVirtualList {
  rows: number;
  key: number | string;
  children?: React.ReactNode
}

const VirtualList: FC<IVirtualList> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useVirtualList(ref, {
    freezeOnceVisible: false
  })
  const isVisible = !!entry?.isIntersecting;
  const { rows, children } = props;
  return (
    <div ref={ref}>
      {isVisible ? children : null}
    </div>
  );
}


const DATA = Array.from({ length: 300 }, (v, k) => k);
const App = () => {
  const defer = useDefer({ maxFrameCount: 300 });
  return (
    <div>

      {DATA.map((item, index) => {
        return defer(item) ? (
          <div key={index} >
            {item}
          </div>
        ) : null
      })
      }
    </div>
  )
}

export default () => {
  return (<>
    <App />
    {
      Array.from({ length: 24 })?.map((_, index) => <App key={index} />)
    }
  </>)
}