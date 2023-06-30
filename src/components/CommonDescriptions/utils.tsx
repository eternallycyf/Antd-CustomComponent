import { CustomTooltip } from '@/components';
import { getUUID } from '@/utils/random';
import { formatNumber, formatPercent, getDictMap, renderTooltip } from '@/utils/util';
import { Col } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import { IDescriptionsColumns } from './index';
import styles from './index.less';

export const addSpace = (str: string) => str.replace(/(\d{3})(\d{4})/g, '$1 $2 ');

export const formatTime = (options: any, text: any) => {
  if (_.isNil(text)) return '--';
  if (typeof options.formatTime === 'object') {
    const { format, type } = options.formatTime;
    return dayjs(text, type).format(format);
  }
  return dayjs(text).format(typeof options.formatTime == 'boolean' ? 'YYYY-MM-DD' : options.formatTime);
};

export const renderDetail = (list: IDescriptionsColumns<any>[] = [], info: any) => {
  if (list?.length === 0) return null;
  return list.map((item) => {
    let value = info?.[item.key];
    const controlProps = item?.controlProps ?? {};
    if (item.isPhone) value = addSpace(String(value));
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

    let defaultColProps = {
      key: (item.key || getUUID()) as string,
      className: item.className ? item.className : `${styles.desc}`,
      span: item?.span ?? 24,
    };
    const maxLength = item?.maxLength ?? 40;

    if (item?.format) return item?.format(value, info);

    if (item.type == 'text') {
      return (
        <CustomTooltip
          {...defaultColProps}
          col={23}
          paragraphClassName={`${item.labelClassName} ${item.wrapperClassName} ${defaultColProps?.className}`}
          maxLength={maxLength}
          {...controlProps}
          text={value ?? '--'}
        />
      );
    }

    if (item.type === 'tip') {
      const className = `${item?.className} ${styles[item.tipType + '-tip']}`;
      return (
        <Col {...defaultColProps} className={''} style={{ ...defaultColProps, margin: 0, paddingLeft: 0 }}>
          <div className={className}>
            <CustomTooltip
              style={{ padding: 0 }}
              col={23}
              paragraphClassName={className}
              maxLength={9999 || item?.maxLength}
              {...controlProps}
              text={item?.tipMessage ?? '--'}
            />
          </div>
        </Col>
      );
    }

    if (item.type == 'formItem') {
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

      const type = item.maxLength != undefined ? 'text' : 'textarea';
      let minWidth = 40;
      if (typeof newValue == 'string') minWidth = newValue.length * 12;
      if (item.tooltip) minWidth += 20;
      return (
        <Col {...defaultColProps}>
          <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
            <span style={{ minWidth }} className={item.labelClassName}>
              {newValue}
            </span>
            {type == 'text' ? (
              <CustomTooltip
                col={22}
                paragraphClassName={`${item.wrapperClassName} ${defaultColProps?.className} `}
                maxLength={maxLength}
                {...controlProps}
                text={value ?? '--'}
              />
            ) : (
              <CustomTooltip.Paragraph
                rows={item.rows || 2}
                className={`${item.wrapperClassName} ${defaultColProps?.className}`}
                {...controlProps}
                text={value ?? '--'}
              />
            )}
          </div>
        </Col>
      );
    }

    return null;
  });
};
