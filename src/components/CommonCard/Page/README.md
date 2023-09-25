## IndexPage

```tsx | pure
const componentProps = {};
const tabList: IIndexPageProps['tabList'] = [
  {
    tab: '总览',
    key: 'overview',
    Component: Overview,
    visible: true,
  }
]

<Page.IndexPage
  header={<Header />}
  tabList={tabList}
  componentProps={componentProps}
  loading={loading}
  tabProps={{
    activeKey: activeKey,
    onChange: setActiveKey
  }}
/>
```
