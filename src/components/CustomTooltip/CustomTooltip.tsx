import { Col, ColProps, Input, Tooltip, Typography } from 'antd';
import React, { FC, Fragment, useState, useRef, useCallback } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import useForceUpdate from '@/hook/useForceUpdate';
import cx from './index.less';
const { Paragraph } = Typography;
const { TextArea } = Input;

interface IBaseProps {
  /**
   * @description 需要格式化的string
   * @type string | React.ReactNode
   * @default '''
   */
  text: string | any;
  /**
   * @description 样式
   * @type React.CSSProperties
   * @default {color: 'rgba(0,0,0,0.45)',fontSize: 14,}
   */
  style?: React.CSSProperties | any;
  /**
   * @description 栅格
   * @type number
   * @default 35
   */
  col?: number | string;
  /**
   * @description 是否可以复制
   * @type boolean
   * @default false
   */
  copyable?: boolean;
  colProps?: ColProps;
  paragraphClassName?: string;
  tooltipClassName?: string;
}
interface ISingleRowProps {
  /**
   * @description 最大长度 maxLength和row同时只有一个生效
   * @type number
   * @default 35
   */
  maxLength?: number;
}
interface RowProps {
  /**
   * @description 最大行数
   * @type number | 'autoSize'
   * @default 1
   */
  rows: number | 'autoSize';
  /**
   * @description 是否显示省略号 => ...
   * @type boolean
   * @default true
   */
  EllipsisSymbol?: boolean;
  /**
   * @description 是否可展开收起
   * @type boolean
   * @default true
   */
  expend?: boolean;
  /**
   * @description 一行的最大高度 当开启展开收起时 必须传入用于 处理闪烁问题 初次渲染如果超过这个高度自动隐藏
   * @type number
   * @default 50
   */
  lineMaxHeight?: number;
  /**
   * @description 展开收起按钮是否固定在最右边
   * @type boolean
   * @default false
   */
  isRight?: boolean;
  /**
   * @description 自定义是否展示 展开收起按钮
   * customShowBtn: () => arr.length > 10 ? true : false
   * @default undefined
   */
  customShowBtn?: () => boolean;
}
interface IRowProps {
  /**
   * @description 行配置 (maxLength和row同时只有一个生效)
   * @type IRowProps
   * @default IRowProps
   */
  row?: RowProps;
}
interface ICustomTooltipProps extends IBaseProps, ISingleRowProps, IRowProps {}
type ICustomTooltipSimpleProps = IBaseProps & ISingleRowProps;
type ICustomTooltipRowProps = IBaseProps & IRowProps;
type Iprops<T extends boolean | unknown> = T extends true
  ? ICustomTooltipRowProps
  : T extends false
  ? ICustomTooltipSimpleProps
  : ICustomTooltipProps;

const CustomTooltip = <T extends unknown | boolean = unknown>(props: Iprops<T>) => {
  const forceUpdate = useForceUpdate();
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [overflowStatus, setOverflowStatus] = useState<'hidden' | 'unset'>('hidden');

  // 如果没有展开的话 height只会有一个值 如果可以展开 会先输出两个值 (展开前的高度 收起后的高度)
  const heightList = useRef<number[]>([]);
  const [hasExpend, setHasExpend] = useState<boolean>(false);
  const contentRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      if (props!.row!.customShowBtn) {
        return setHasExpend(props!.row!.customShowBtn());
      }
      const newHeight = node.getBoundingClientRect().height;
      const list = [...new Set([...heightList.current, newHeight])];
      heightList.current = [...list];
      if (heightList.current.length <= 1) {
        setHasExpend(false);
      } else {
        setHasExpend(true);
      }
    }
    return node;
  }, []);

  /**当 react 版本小于18.0 */
  /**当使用 useCallback 方式无法监听时 使用 ResizeObserver 对象监听*/
  /** Paragraph 上获取不到ref 就放在外面的col上获取*/
  /**当组件 无法重新渲染最新效果的时候 给 CustomTooltip 组件加上一个key控制渲染 例如 key={Math.random()} */
  // useLayoutEffect(() => {
  //   if (contentRef.current) {
  //     const node = contentRef.current as HTMLDivElement;
  //     console.log(node.firstElementChild!)
  //     const rObserver = new ResizeObserver(entries => {
  //       const newHeight = entries[0].contentRect.height;
  //       console.log(newHeight)
  //       if (newHeight !== 0) {
  //         const list = [...new Set([...heightList.current, newHeight])];
  //         heightList.current = [...list];
  //       }
  //       if (heightList.current.length <= 1) {
  //         setHasExpend(false);
  //       } else {
  //         setHasExpend(true);
  //       }
  //       rObserver.observe(node.firstElementChild!);
  //       setTimeout(() => {
  //         rObserver.unobserve(node.firstElementChild!);
  //       }, 5000);
  //     });
  //   }
  // })

  const {
    text = '',
    maxLength = 35,
    style = {},
    row = {
      rows: 1,
      EllipsisSymbol: true,
      expend: true,
      lineMaxHeight: 50,
      isRight: false,
      customShowBtn: undefined,
    },
    col = 24,
    colProps = {},
    copyable = false,
    paragraphClassName = '',
    tooltipClassName = '',
  } = props;

  const isTextToObject = typeof text === 'object';
  const isShowEllipsisSymbol = row.EllipsisSymbol ? '...' : '';
  const copyableProps = copyable ? { copyable: { text, tooltips: ['点击复制', '复制成功'] } } : {};
  const ellipsisClassName = row.EllipsisSymbol ? cx.ellipsis : '';
  const styles = {
    // maxWidth: 370,
    // wordWrap: 'break-word',
    // wordBreak: 'break-all',
    color: 'rgba(0,0,0,0.45)',
    fontSize: 14,
    ...style,
  };

  const buttonStyle = row.isRight
    ? ({
        position: 'absolute',
        right: 0,
        top: 0,
      } as React.CSSProperties)
    : ({} as React.CSSProperties);
  const getToggleButton = (isExpandStatus: boolean) => {
    if (isExpandStatus) {
      return (
        <a
          style={buttonStyle}
          className="ant-typography-expand"
          onClick={() => {
            setOverflowStatus('unset');
            setIsExpand(isExpandStatus);
            forceUpdate();
          }}
        >
          展开 <UpOutlined className={cx['apply-shake']} />
        </a>
      );
    } else {
      return (
        <a
          style={buttonStyle}
          className="ant-typography-expand"
          onClick={() => {
            setIsExpand(isExpandStatus);
            forceUpdate();
          }}
        >
          收起 <DownOutlined className={cx['apply-shake']} />
        </a>
      );
    }
  };

  const customRowBaseProps = {
    style: styles,
    ...copyableProps,
  };
  // 如果是元素 Paragraph 组件设置row为1时候 只显示... 需要手动设置为 rows >= 2
  const customRows = isTextToObject
    ? typeof row.rows === 'number'
      ? typeof props.row?.customShowBtn === 'function'
        ? row.rows
        : row.rows + 1
      : 2
    : row.rows;
  // 处理 初始化的闪烁问题 设置最大高度 为一行的高度, 溢出隐藏 当点击时恢复
  const customRowsColStyles = {
    maxHeight: overflowStatus == 'hidden' ? row.lineMaxHeight : '100%',
    overflow: overflowStatus,
    paddingRight: row.isRight ? 46 : 0,
  };
  const customRowEllipsisParagraphProps = isExpand
    ? { ...customRowBaseProps }
    : {
        ...customRowBaseProps,
        ellipsis: {
          rows: customRows as number,
          expandable: hasExpend ? isExpand : false,
          suffix: hasExpend ? (isExpand ? '' : (getToggleButton(true) as any as string)) : '',
          tooltip: isTextToObject ? '' : text,
          onExpand: () => {
            setIsExpand(true);
            forceUpdate();
          },
        },
      };
  const customRowEllipsisNotExpandParagraphProps = {
    ...customRowBaseProps,
    ellipsis: {
      rows: customRows as number,
      expandable: false,
      tooltip: isTextToObject ? '' : text,
    },
  };

  // row.rows = 1 且 text.length > maxLength
  const SingleOverflowParagraph = (
    <Tooltip title={text} style={styles} className={`${ellipsisClassName} ${tooltipClassName}`}>
      <Paragraph {...copyableProps} style={styles} className={paragraphClassName}>
        {isTextToObject ? '' : String(text).slice(0, maxLength) + isShowEllipsisSymbol ?? '--'}
      </Paragraph>
    </Tooltip>
  );

  // row.rows = 1 且 text.length <= maxLength
  const SingleParagraph = (
    <Paragraph {...copyableProps} style={styles} className={`${ellipsisClassName} ${paragraphClassName}`}>
      {text ?? '--'}
    </Paragraph>
  );

  // 设置了 row.autoSize
  const AutoSizeParagraph = isTextToObject ? (
    <Fragment>
      <Col span={col} {...colProps}>
        {text ?? '--'}
      </Col>
    </Fragment>
  ) : (
    <Fragment>
      <Col span={col} {...colProps}>
        <Paragraph {...copyableProps} className={`${ellipsisClassName} ${paragraphClassName}`}>
          <TextArea style={{ resize: 'none', ...styles }} autoSize bordered={false} readOnly value={text ?? '--'} />
        </Paragraph>
      </Col>
    </Fragment>
  );

  const CustomRowExpendParagraph = (
    <Col
      span={col}
      className={ellipsisClassName}
      style={{ ...customRowsColStyles, position: 'relative' }}
      {...colProps}
    >
      <Paragraph {...customRowEllipsisParagraphProps} ref={contentRef} className={`${paragraphClassName}`}>
        {text ?? '--'}
        {isExpand && getToggleButton(false)}
      </Paragraph>
    </Col>
  );

  const CustomRowNotExpendParagraph = (
    <Col span={col} className={`${ellipsisClassName}`} {...colProps}>
      <Paragraph {...customRowEllipsisNotExpandParagraphProps} className={paragraphClassName}>
        {text ?? '--'}
      </Paragraph>
    </Col>
  );

  if (row.rows == 'autoSize' && isTextToObject) {
    console.log('当传入的text不是string类型时, 建议使用row={{ rows:1, expend: true }}');
  }
  if (row.rows == 'autoSize') return AutoSizeParagraph;
  if (row.rows > 1 && row.expend == true) return CustomRowExpendParagraph;
  if (row.rows > 1 && !row.expend) return CustomRowNotExpendParagraph;
  if (isTextToObject) {
    console.log('只有当 row.rows >= 2 的时候才可以配置 row.expend');
    return CustomRowExpendParagraph;
  }

  return (
    <Col span={col} style={{ display: 'inline-block' }} {...colProps}>
      <Paragraph style={styles} className={`${ellipsisClassName} ${paragraphClassName}`}>
        {text && text.length > maxLength ? SingleOverflowParagraph : SingleParagraph}
      </Paragraph>
    </Col>
  );
};

export default CustomTooltip;
