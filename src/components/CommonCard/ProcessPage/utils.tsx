import { CustomTooltip } from '@/components';
import { getUUID } from '@/utils/random';
import { formatNumber, formatPercent } from '@/utils/util';
import { Col } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import styles from './index.less';
import { IProcessCard, IUserInfoFormList } from './interface';

export const addSpace = (str: string) => str.replace(/(\d{3})(\d{4})/g, '$1 $2 ');

export const formatTime = (options: any, text: any) => {
  if (_.isNil(text)) return '--';
  if (typeof options.formatTime === 'object') {
    const { format, type } = options.formatTime;
    return dayjs(text, type).format(format);
  }
  return dayjs(text).format(typeof options.formatTime == 'boolean' ? 'YYYY-MM-DD' : options.formatTime);
};

export const renderDetail = (list: IUserInfoFormList[] = [], info: any, subInfo?: any) => {
  if (list?.length === 0) return null;
  return list.map((item) => {
    let value = item?.formatValue ? item?.formatValue(info?.[item.key], info) : info?.[item.key];
    if (item.isPhone) value = addSpace(String(value));
    if (item.formatPercent) value = formatPercent(value);
    if (item.formatNumber) value = formatNumber(item, value);
    if (item.formatTime) value = formatTime(item, value);

    let defaultColProps = {
      key: item.key || getUUID(),
      className: item.className ? item.className : `${subInfo ? styles['sub-desc'] : styles.desc}`,
      span: item?.span ?? 4,
    };
    if (item?.isSubTitle) defaultColProps.className = styles.subTitle;
    const maxLength = item?.maxLength ?? 40;

    if (item?.format) return item?.format(value, info);
    if (item.type === 'subTitle' && subInfo) {
      return (
        <Col {...defaultColProps} className={`${item.className} ${styles.subTitle}`} span={24}>
          {`关于【${info?.[subInfo?.departmentKey!] ?? '--'}】- 【${info?.[subInfo?.userNameKey!] ?? '--'}】的${subInfo?.title ?? '--'}`}
        </Col>
      );
    }
    if (item.type == 'text') {
      return (
        <CustomTooltip
          {...defaultColProps}
          col={defaultColProps.span}
          paragraphClassName={defaultColProps?.className}
          text={value ?? '--'}
          maxLength={maxLength}
        />
      );
    }

    if (item.type === 'tip') {
      const className = `${item?.className} ${styles[item.tipType + '-tip']}`;
      return (
        <Col {...defaultColProps} className={''} style={{ ...defaultColProps, margin: 0 }}>
          <div className={className}>
            <CustomTooltip
              style={{ padding: 0 }}
              paragraphClassName={className}
              text={item?.tipMessage ?? '--'}
              maxLength={9999 || item?.maxLength}
            />
          </div>
        </Col>
      );
    }

    if (item.type == 'formItem') {
      return (
        <Col {...defaultColProps}>
          <span>{item?.label ? `${item?.label}:` : null}</span>
          <CustomTooltip paragraphClassName={defaultColProps?.className} text={value ?? '--'} maxLength={maxLength} />
        </Col>
      );
    }

    return null;
  });
};
