import React, { useContext, useEffect } from 'react';
import { KeepAliveContext } from './KeepAliveContext';

interface IKeepAliveTransferProps {
  KeepAliveComponent: React.ComponentType;
  keepAliveId: string;
}

const KeepAliveTransfer = <Props extends IKeepAliveTransferProps>(
  KeepAliveComponent: React.ComponentType<Props> | any,
  keepAliveId?: string,
) => {
  const displayName = KeepAliveComponent.displayName || KeepAliveComponent.name || keepAliveId;

  return (props: Omit<Props, keyof IKeepAliveTransferProps>) => {
    const _ref = React.useRef<HTMLDivElement>(null!);
    const { keepAliveStates, setKeepAliveState } = useContext(KeepAliveContext);

    useEffect(() => {
      const state = keepAliveStates[displayName];
      if (state && state?.nodes) {
        state.nodes.forEach((node: any) => _ref.current.appendChild(node));
      } else {
        setKeepAliveState({
          keepAliveId: displayName,
          reactElement: <KeepAliveComponent {...(props as Props)} />,
        });
      }
    }, [keepAliveStates, setKeepAliveState, props]);

    return <div ref={_ref} />;
  };
};

export default KeepAliveTransfer;
