import useForceUpdate from '@/hook/useForceUpdate';
import { DownOutlined, UpOutlined, LeftOutlined } from '@ant-design/icons';
import { Col, Input, Tooltip, Typography } from 'antd';
import _ from 'lodash';
import React, { FC, Fragment, useCallback, useRef, useState } from 'react';
import CustomTooltipFileName, { IFileName } from './FileName';
import cx from './index.less';
import { IProps } from './interface';
import CustomTooltipParagraph, { IParagraph } from './Paragraph';
const { Paragraph } = Typography;
const { TextArea } = Input;

const CustomTooltip = <T extends unknown | boolean = unknown>(props: IProps<T>) => {
  const forceUpdate = useForceUpdate();
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [overflowStatus, setOverflowStatus] = useState<'hidden' | 'unset'>('hidden');
  const [isString, setIsString] = useState<boolean>(typeof props?.text === 'string' || typeof props?.text === 'number');

  // 如果没有展开的话 height只会有一个值 如果可以展开 会先输出两个值 (展开前的高度 收起后的高度)
  const heightList = useRef<number[]>([]);
  const [hasExpend, setHasExpend] = useState<boolean>(false);
  const contentRef = useCallback((node: HTMLDivElement) => {
    if (node !== null && !isString) {
      if (props?.row?.customShowBtn) {
        return setHasExpend(props!.row!.customShowBtn());
      }
      // const newHeight = node.getBoundingClientRect().height;
      // const list = [...new Set([...heightList.current, newHeight])];
      // heightList.current = [...list];
      // if (heightList.current.length <= 1) {
      //   setHasExpend(false);
      // } else {
      //   setHasExpend(true);
      // }
    }
    return node;
  }, []);

  /**当 react 版本小于18.0 */
  /**当使用 useCallback 方式无法监听时 使用 ResizeObserver 对象监听*/
  /** Paragraph 上获取不到ref 就放在外面的col上获取*/
  /**当组件 无法重新渲染最新效果的时候 给 CustomTooltip 组件加上一个key控制渲染 例如 key={Math.random()} */
  // useLayoutEffect(() => {
  //   if (contentRef.current && !isString) {
  //     if(props.row?.customShowBtn) {
  //       return setHasExpend(props.row.customShowBtn());
  //     }
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
      btnStyle: 'default',
      isTag: false,
    },
    col = 24,
    colProps = {},
    copyable = false,
    paragraphClassName = '',
    tooltipClassName = '',
    expandIcon,
    retractIcon,
  } = props;

  if (_.isNil(text) || (typeof text === 'string' && text.length === 0)) return <span style={{ color: '#8E96A4' }}>--</span>;

  const isTextToObject = typeof text !== 'string' && typeof text !== 'number';
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
        fontSize: 12,
      } as React.CSSProperties)
    : ({
        // display: 'block',
        fontSize: 12,
      } as React.CSSProperties);
  const getToggleButton = (isExpandStatus: boolean) => {
    if (isExpandStatus) {
      return (
        <a
          style={buttonStyle}
          className={`ant-typography-expand ${cx['btn-link']}`}
          onClick={() => {
            setOverflowStatus('unset');
            setIsExpand(isExpandStatus);
            forceUpdate();
          }}
        >
          {row.btnStyle !== 'btn' ? (
            <>
              展开
              <span className={cx['apply-shake']}>{expandIcon || <LeftOutlined className={cx['apply-shake']} />}</span>
            </>
          ) : (
            <span className={cx['expand-btn']}>
              {row?.customMoreLength ? `更多 ${row?.customMoreLength} ` : ''}
              <span className={cx['apply-shake']}>{expandIcon || <UpOutlined className={cx['apply-shake']} />}</span>
            </span>
          )}
        </a>
      );
    } else {
      return (
        <a
          style={buttonStyle}
          className={`ant-typography-expand ${cx['btn-link']}`}
          onClick={() => {
            setOverflowStatus('hidden');
            setIsExpand(isExpandStatus);
            forceUpdate();
          }}
        >
          {row.btnStyle !== 'btn' ? (
            <>
              收起
              <span className={cx['apply-shake']}>{retractIcon || <DownOutlined className={cx['apply-shake']} />}</span>
            </>
          ) : (
            <span className={cx['expand-btn']}>
              {row?.customMoreLength && '收起'}
              <span className={cx['apply-shake']}>{retractIcon || <DownOutlined className={cx['apply-shake']} />}</span>
            </span>
          )}
        </a>
      );
    }
  };

  const customRowBaseProps = {
    style: styles,
    ...copyableProps,
  };

  const customRows = isTextToObject ? (typeof row.rows === 'number' && row.isTag ? row.rows + 1 : row.rows) : row.rows;

  // 处理 初始化的闪烁问题 设置最大高度 为一行的高度, 溢出隐藏 当点击时恢复
  const customRowsColStyles =
    row?.customMoreLength == undefined
      ? {
          maxHeight: overflowStatus === 'hidden' ? row.lineMaxHeight : '100%',
          overflow: overflowStatus,
          paddingRight: row.isRight ? 46 : 0,
        }
      : { paddingRight: row.isRight ? 46 : 0 };
  const customRowEllipsisParagraphProps = isExpand
    ? { ...customRowBaseProps }
    : {
        ...customRowBaseProps,
        ellipsis: {
          rows: row?.customMoreLength && row?.btnStyle == 'btn' ? (customRows as number) + 1 : (customRows as number),
          expandable: hasExpend ? isExpand : false,
          suffix: hasExpend ? (isExpand ? '' : (getToggleButton(true) as any as string)) : '',
          tooltip: isTextToObject ? '' : text,
          onExpand: () => {
            setIsExpand(true);
            forceUpdate();
          },
          onEllipsis: (isEllipsis: boolean) => {
            row?.expend ? setHasExpend(isEllipsis) : setHasExpend(false);
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
    <Tooltip
      title={text}
      style={styles}
      overlayInnerStyle={{ maxWidth: 700, overflowY: 'auto' }}
      className={`${ellipsisClassName} ${tooltipClassName}`}
    >
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
    <Col span={col} className={ellipsisClassName} style={{ ...customRowsColStyles, position: 'relative' }} {...colProps}>
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

  if (row.rows === 'autoSize' && isTextToObject) {
    console.log('当传入的text不是string类型时, 建议使用row={{ rows:1, expend: true }}');
  }
  if (row.rows === 'autoSize') return AutoSizeParagraph;
  if (row.rows > 1 && row.expend === true) return CustomRowExpendParagraph;
  if (row.rows > 1 && !row.expend) return CustomRowNotExpendParagraph;
  if (isTextToObject) {
    console.log('只有当 row.rows >= 2 的时候才可以配置 row.expend');
    return CustomRowExpendParagraph;
  }

  return (
    <Col span={col} style={{ display: 'inline-block' }} {...colProps}>
      <Paragraph style={styles} className={`${ellipsisClassName} ${paragraphClassName}`}>
        {text && String(text).length > maxLength ? SingleOverflowParagraph : SingleParagraph}
      </Paragraph>
    </Col>
  );
};

export type ICustomTooltipComponent = typeof CustomTooltip & {
  Paragraph: FC<IParagraph>;
  FileName: FC<IFileName>;
};

CustomTooltip.Paragraph = CustomTooltipParagraph;
CustomTooltip.FileName = CustomTooltipFileName;

export default CustomTooltip as ICustomTooltipComponent;
