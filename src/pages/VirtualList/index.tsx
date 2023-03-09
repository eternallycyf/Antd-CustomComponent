import HookDemo from '@/components/VirtualList/useVirtualList/demo';
import VirtualListDemo from '@/components/VirtualList/VirtualList/demo';
import Page from '@/components/Page';

export default function VirtualList() {
  return (
    <>
      <Page>
        <div style={{ height: 500 }}>
          <VirtualListDemo />
        </div>
      </Page>
      <Page>
        <HookDemo />
      </Page>
    </>
  );
}
