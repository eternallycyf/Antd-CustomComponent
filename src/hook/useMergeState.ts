import { useRef, useState, useEffect } from "react";

// interface IProps{
//   value?: string;
//   defaultValue?: string;
//   onChange?: (value: string) => void;
// }

// function App(props: IProps) {
//   const {
//     value: propsValue,
//     defaultValue,
//     onChange
//   } = props;

//   const [mergedValue, setValue] = useMergeState('', {
//     value: propsValue,
//     defaultValue
//   });

//   function changeValue(value: string) {
//     if (propsValue === undefined) {
//       setValue(value);
//     }
//     onChange?.(value);
//   } 

//   return <div>
//     {mergedValue}
//     <div onClick={()=> changeValue(xxx)}}>xxxxx</div>
//   </div>
// }



function useMergeState<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T,
    value?: T
  }
): [T, React.Dispatch<React.SetStateAction<T>>,] {
  const { defaultValue, value: propsValue } = props || {};

  const isFirstRender = useRef(true);

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue!;
    } else if(defaultValue !== undefined){
      return defaultValue!;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if(propsValue === undefined && !isFirstRender.current) {
      setStateValue(propsValue!);
    }

    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? stateValue : propsValue;

  return [mergedValue, setStateValue]
}
