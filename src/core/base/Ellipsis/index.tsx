// @ts-nocheck
import { Tooltip, TooltipProps } from 'antd';
import React, { Component } from 'react';
import cx from 'classnames';
import { cutStrByFullLength, getStrFullLength } from '@/core/helpers/string';
import styles from './index.less';

interface IEllipsisProps {
  tooltip?: boolean | TooltipProps;
  length?: number;
  lines?: number;
  style?: React.CSSProperties;
  className?: string;
  fullWidthRecognition?: boolean;
  children?: React.ReactNode;
}

const isSupportLineClamp = document.body.style.webkitLineClamp !== undefined;

const TooltipOverlayStyle = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
};

const getTooltip = ({ tooltip, overlayStyle, title, children }: any) => {
  if (tooltip) {
    const props =
      tooltip === true
        ? { overlayStyle, title }
        : { ...tooltip, overlayStyle, title };
    return <Tooltip {...props}>{children}</Tooltip>;
  }
  return children;
};

const EllipsisText = ({
  text,
  length,
  tooltip,
  fullWidthRecognition,
  ...other
}: any) => {
  if (typeof text !== 'string') {
    throw new Error('Ellipsis children must be string.');
  }
  const textLength = fullWidthRecognition
    ? getStrFullLength(text)
    : text.length;
  if (textLength <= length || length < 0) {
    return <span {...other}>{text}</span>;
  }

  const tail = '...';
  const displayText =
    length - tail.length <= 0
      ? ''
      : fullWidthRecognition
      ? cutStrByFullLength(text, length)
      : text.slice(0, length);

  const spanAttrs = tooltip ? {} : { ...other };
  return getTooltip({
    tooltip,
    overlayStyle: TooltipOverlayStyle,
    title: text,
    children: (
      <span {...spanAttrs}>
        {displayText}
        {tail}
      </span>
    ),
  });
};

export default class Ellipsis extends Component<IEllipsisProps, any> {
  static defaultProps = {
    lines: 1,
    length: 100,
    tooltip: true,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
      targetCount: 0,
    };
  }

  componentDidMount() {
    if (this['node']) {
      this.computeLine();
    }
  }

  componentDidUpdate(preProps: any) {
    const { lines } = this.props;
    if (preProps.lines !== lines) {
      this.computeLine();
    }
  }

  handleRoot = (n) => {
    this['root'] = n;
  };

  handleContent = (n) => {
    this['content'] = n;
  };

  handleNode = (n) => {
    this.node = n;
  };

  handleShadow = (n) => {
    this['shadow'] = n;
  };

  handleShadowChildren = (n) => {
    this['shadowChildren'] = n;
  };

  computeLine = () => {
    const { lines } = this.props;
    if (lines && !isSupportLineClamp) {
      const text =
        this['shadowChildren'].innerText || this['shadowChildren'].textContent;
      const lineHeight = parseInt(
        getComputedStyle(this['root']).lineHeight,
        10,
      );
      const targetHeight = lineHeight * lines;
      this['context'].style.height = `${targetHeight}px`;
      const totalHeight = this['shadowChildren'].offsetHeight;
      const shadowNode = this['shadow'].firstChild;

      if (totalHeight <= targetHeight) {
        this.setState({
          text,
          targetCount: text.length,
        });
        return;
      }

      // bisection
      const len = text.length;
      const mid = Math.ceil(len / 2);
      const count = this.bisection(targetHeight, mid, 0, len, text, shadowNode);
      this.setState({
        text,
        targetCount: count,
      });
    }
  };

  bisection = (th, m, b, e, text, shadowNode) => {
    const suffix = '...';
    let mid = m;
    let end = e;
    let begin = b;
    shadowNode.innerHTML = text.substring(0, mid) + suffix;
    let sh = shadowNode.offsetHeight;

    if (sh <= th) {
      shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
      sh = shadowNode.offsetHeight;
      if (sh > th || mid === begin) {
        return mid;
      } else {
        mid = Math.floor((end - begin) / 2) + begin;
      }
      return this.bisection(th, mid, begin, end, text, shadowNode);
    }

    if (mid - 1 < 0) return mid;
    shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
    sh = shadowNode.offsetHeight;

    if (sh <= th) return mid - 1;
    end = mid;
    mid = Math.floor((end - begin) / 2) + begin;
    return this.bisection(th, mid, begin, end, text, shadowNode);
  };

  render(): React.ReactNode {
    const { text, targetCount } = this.state;
    const {
      children,
      tooltip,
      length,
      lines,
      fullWidthRecognition,
      className,
      ...restProps
    } = this.props;

    const cls = cx(styles.ellipsis, className, {
      [styles.lines]: lines && !isSupportLineClamp,
      [styles.lineClamp]: lines && isSupportLineClamp,
    });

    if (!lines && !length) {
      return (
        <span {...restProps} className={cls}>
          {children}
        </span>
      );
    }

    if (!lines) {
      return (
        <EllipsisText
          className={cls}
          text={children || ''}
          length={length}
          tooltip={tooltip}
          fullWidthRecognition={fullWidthRecognition}
          {...restProps}
        />
      );
    }

    const id = `ellipsis-${`${new Date().getTime()}${Math.floor(
      Math.random() * 100,
    )}`}`;

    // support document.body.style.webkitLineClamp
    if (isSupportLineClamp) {
      const style = `#${id}{-webkit-line-clamp:${lines};-webkit-box-orient:vertical;}`;

      const node = (
        <div id={id} className={cls} {...restProps}>
          <style>{style}</style>
        </div>
      );

      return getTooltip({
        tooltip,
        overlayStyle: TooltipOverlayStyle,
        title: children,
        children: node,
      });
    }

    const childNode = (
      <span ref={this.handleNode}>
        {targetCount > 0 && text.substring(0, targetCount)}
        {targetCount > 0 && targetCount < text.length && '...'}
      </span>
    );

    return (
      <div {...restProps} ref={this.handleRoot} className={cls}>
        <div ref={this.handleContent}>
          {getTooltip({
            tooltip,
            overlayStyle: TooltipOverlayStyle,
            title: text,
            children: childNode,
          })}
          <div className={styles.shadow} ref={this.handleShadowChildren}>
            {children}
          </div>
          <div className={styles.shadow} ref={this.handleShadow}>
            <span>{text}</span>
          </div>
        </div>
      </div>
    );
  }
}
