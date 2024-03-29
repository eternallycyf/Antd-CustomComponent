import { CustomTooltip } from '@/components';
import Ellipsis from '@/core/base/Ellipsis';
import { getUUID } from '@/utils/random';
import { formatNumber, formatPercent, getDictMap, renderTooltip } from '@/utils/util';
import { Col } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import { IDescriptionsColumns } from './index';
import styles from './index.less';
import type { IProps as ICustomTooltipProps } from '@/components/CustomTooltip/interface';
import { EllipsisProps } from '@/core/base/Ellipsis/Ellipsis';
import { FC } from 'react';
import { EllipsisExpandProps } from '@/core/base/Ellipsis/Expand';
import { Merge, DeepPartial } from '@/typings/utils';

export const addSpace = (str: string) => str.replace(/(\d{3})(\d{4})/g, '$1 $2 ');

function getValueLen(_nameValue: string) {
  var nameStr = _nameValue;
  var len = 0;
  for (var i = 0; i < nameStr.length; i++) {
    if (nameStr.charCodeAt(i) > 255 || nameStr.charCodeAt(i) < 0) {
      len += 2;
    } else {
      len++;
    }
  }
  return len == undefined ? 0 : len;
}

export const formatTime = (options: any, text: any) => {
  if (_.isNil(text)) return '--';
  if (typeof options.formatTime === 'object') {
    const { format, type } = options.formatTime;
    return dayjs(text, type).format(format);
  }
  return dayjs(text).format(typeof options.formatTime == 'boolean' ? 'YYYY-MM-DD' : options.formatTime);
};

export const ContentWrapper: FC<Merge<DeepPartial<Merge<EllipsisProps, EllipsisExpandProps>>, { expand: boolean }>> = (props) => {
  const { expand, children, ...restProps } = props;
  if (expand) {
    return <Ellipsis.Expand {...(restProps as EllipsisExpandProps)} />;
  } else {
    return <Ellipsis {...(restProps as EllipsisProps)}>{children as string}</Ellipsis>;
  }
};

export const renderDetail = (list: IDescriptionsColumns<any>[] = [], info: any) => {
  if (list?.length === 0) return null;
  const accessCollection = JSON.parse(sessionStorage.getItem('accessCollection') || '[]');

  return list
    .filter(({ acpCode }) => (acpCode ? accessCollection.includes(acpCode) : true))
    .map((item) => {
      let value = info?.[item.key];
      /** 默认值 */
      const expand = item?.expand ?? false;
      const maxLength = item?.maxLength ?? 40;
      const controlProps = item?.controlProps ?? {};
      const contentWrapperType = item?.rows || item?.rows == undefined ? 'textarea' : 'text';
      const contentWrapperTypeProps = contentWrapperType == 'textarea' ? { lines: item?.rows ?? 1 } : { length: maxLength };

      if (item.isPhone) value = value ? addSpace(String(value)) : undefined;
      if (item.formatPercent) value = formatPercent(value);
      if (item.formatNumber) value = formatNumber(item, value);
      if (item.formatTime) value = formatTime(item, value);
      if (item.dict) value = getDictMap(item.dict)[value];
      if (item.formatValue) value = item?.formatValue(info?.[item.key], info);
      if (item.visible != undefined) {
        if (typeof item.visible === 'boolean' && item.visible === false) {
          return null;
        }
        if (typeof item.visible === 'function' && item.visible(value, info) === false) {
          return null;
        }
      }
      if (item?.format) return item?.format(value, info);

      /** 默认值 */

      let defaultColProps = {
        key: (item.key || getUUID()) as string,
        className: item.className ? item.className : `${styles.desc}`,
        span: item?.span ?? 20,
      };
      const defaultExpandProps = expand
        ? {
            content: value,
            rows: item?.rows ?? 2,
            expandText: '展开',
            collapseText: '收起',
          }
        : {};

      if (item.type == 'text') {
        return (
          <Col {...defaultColProps}>
            <ContentWrapper
              expand={expand}
              className={`${item.labelClassName} ${item.wrapperClassName} ${defaultColProps?.className}`}
              {...contentWrapperTypeProps}
              {...(controlProps as EllipsisProps)}
              {...defaultExpandProps}
            >
              {value ?? '--'}
            </ContentWrapper>
          </Col>
        );
      }

      if (item.type === 'tip') {
        const className = `${item?.className} ${styles[item.tipType + '-tip']}`;
        return (
          <Col {...defaultColProps} className={''} style={{ ...defaultColProps, margin: 0, paddingLeft: 0 }}>
            <div className={className}>
              <CustomTooltip
                style={{ padding: 0 }}
                col={24}
                paragraphClassName={className}
                maxLength={9999 || item?.maxLength}
                {...(controlProps as ICustomTooltipProps<unknown>)}
                text={item?.tipMessage ?? '--'}
              />
            </div>
          </Col>
        );
      }

      if (item.type == 'formItem') {
        /** 添加tooltip */
        const label = item?.label;
        let newValue: any = item?.label;
        if (item.tooltip) {
          if (typeof item.tooltip === 'string') {
            newValue = renderTooltip(label, item.tooltip as string, '：');
          } else if (typeof item.tooltip === 'function') {
            // @ts-ignore
            newValue = renderTooltip(label, item.tooltip(), '：');
          }
        } else {
          newValue = label + '：';
        }

        /** 渲染多行or一行 */
        let minWidth = 40;
        if (typeof newValue == 'string') minWidth = getValueLen(String(newValue)) * 6.25;
        if (item.tooltip) minWidth += 20;
        let formItemProps = {
          expand,
          className: `${item.wrapperClassName} ${defaultColProps?.className}`,
          ...defaultExpandProps,
          ...controlProps,
        };
        return (
          <Col {...defaultColProps}>
            <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
              <span style={{ minWidth }} className={item.labelClassName}>
                {newValue}
              </span>
              <ContentWrapper {...contentWrapperTypeProps} {...formItemProps}>
                {value ?? '--'}
              </ContentWrapper>
            </div>
          </Col>
        );
      }

      return null;
    });
};
