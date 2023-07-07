import { createFromIconfontCN } from '@ant-design/icons';
import { FC } from 'react';
import { iconFontJSON } from './iconfont';

type IconType = (typeof iconFontJSON)['glyphs'][number]['font_class'];
type CapitalizeStr<Str extends string> = Str extends `${infer Rest}` ? `icon-${Rest}` : Str;
interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  type: CapitalizeStr<IconType>;
  spin?: boolean;
  rotate?: number;
}

const Icon: FC<IconProps> = createFromIconfontCN({
  scriptUrl: require(`@/assets/iconfont/iconfont.js`).default,
});

export default Icon;
