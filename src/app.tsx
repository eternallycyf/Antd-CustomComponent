export async function getInitialState(): Promise<{ name: string }> {
  return { name: '管理员' };
}

export const layout = () => {
  return {
    layout: 'mix',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: { locale: false },
    logout: () => {}, // do something
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: '七妮妮',
    },
  };
};
