import { useRef, useImperativeHandle, forwardRef } from "react";
import type { EChartsReactProps } from "echarts-for-react/lib/types";
import ReactECharts from "echarts-for-react";

interface IHandle {
  ref: echarts.ECharts
}

const ReactEChart: React.ForwardRefRenderFunction<IHandle, EChartsReactProps> = (props, echartsRef: any) => {
  const { option, ...restProps } = props;
  const ref = useRef<any>(null!);
  useImperativeHandle(echartsRef, () => ({
    ref: ref.current.getEchartsInstance(),
  }));
  return (
    <div ref={echartsRef}>
      <ReactECharts ref={ref} option={option} {...restProps} />
    </div>
  );
};

export default forwardRef(ReactEChart);
