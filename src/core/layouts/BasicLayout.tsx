import TagsNav from '@/core/base/TagsNav';
import { ConnectState } from '@/typings/connect';
import { connect, getDvaApp, withRouter } from '@umijs/max';

const BasicLayout = (props: any) => {
  const { location, children } = props;

  const { breadcrumbNameMap = {}, menuList = [] } =
    getDvaApp()._store.getState().global;

  const TagsNavProps = {
    breadcrumbNameMap,
    menuList,
    location,
  };

  return (
    <>
      <TagsNav {...TagsNavProps}>{children}</TagsNav>
    </>
  );
};

export default connect(({ global, login }: ConnectState) => ({
  ...global,
  ...login,
}))(withRouter(BasicLayout));
