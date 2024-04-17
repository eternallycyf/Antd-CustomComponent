```tsx
import useVirtualList from "@/hook/useVirtualList";
import { useRef, type FC } from "react";

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
    <span ref={ref}>
      {isVisible ? children : null}
    </span>
  );
}
```