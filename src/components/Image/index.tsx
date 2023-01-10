import React, { PureComponent } from 'react';
import { Avatar, AvatarProps } from "antd";
import imageDefault from '@/assets/image_default.png';

interface IProps {
  fetch: any;
  type?: 'img' | 'avatar';
  defaultValue?: any;
  style?: React.CSSProperties;
  defaultValueStyle?: React.CSSProperties;
  className?: string;
  handleGetSrc?: (src: string) => void;
  [otherProps: string]: Partial<AvatarProps> & any;
}

interface IState {
  src: string;
}

class Image extends PureComponent<IProps, IState> {

  static defaultProps = {
    type: 'img',
    defaultValue: imageDefault
  }

  state: Readonly<IState> = {
    src: ''
  }

  // 获取base64 如果不存在使用默认图片
  async componentDidMount(): Promise<void> {
    const { fetch, defaultValue, handleGetSrc } = this.props;
    try {
      const data = await fetch();
      const src = !!data ? `data:image/png;base64,${data}` : defaultValue;
      await this.setState({ src });
      if (handleGetSrc) handleGetSrc(src);
    } catch (e) {
      await this.setState({ src: defaultValue })
    }
  }

  renderImg = () => {
    const { src } = this.state;
    const { style, className, defaultValue } = this.props;
    const defaultValueStyle = src === defaultValue
      ? this.props.defaultValueStyle : {}

    return (
      <div
        style={{
          overflow: 'hidden',
          textAlign: 'center',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          border: '1px solid #e8e8e8',
          borderRadius: 2,
          ...style,
          ...defaultValueStyle
        }}
        className={className}
      />
    )
  }

  renderAvatar = () => {
    const { src } = this.state;
    const { ...otherProps } = this.props;
    return <Avatar src={src} {...otherProps} />;
  }

  render(): React.ReactNode {
    const { type } = this.props;
    return type === 'img' ? this.renderImg() : this.renderAvatar();
  }
}

export default Image;