import { TreeData } from './index';
import styles from './index.less';

/**
 * 数组转树型结构
 * @param data
 * @param pid
 */
export const arrayToTree = (data: TreeData[], pid: string | number): TreeData[] => {
  const result = [];
  let temp;
  for (const item of data) {
    if (item.pid == pid) {
      const obj = { ...item, key: item.id };
      temp = arrayToTree(data, item.id);
      if (temp.length > 0) {
        obj.children = temp;
      }
      result.push(obj);
    }
  }

  return result as TreeData[];
};

export function addDisabledProperty(data: TreeData[], disabledIds: string[]) {
  function traverseAndDisable(node: TreeData) {
    if (disabledIds.includes(node?.priceType)) {
      node.disable = true;
    }
    if (node.children && node.children.length > 0) {
      for (const childNode of node.children) {
        traverseAndDisable(childNode);
      }
    }
  }

  for (const category of data) {
    traverseAndDisable(category);
  }
  return data;
}

export function cancelDisabledProperty(data: TreeData[]) {
  function traverseAndCancel(node: TreeData) {
    node.disable = false;
    if (node.children && node.children.length > 0) {
      for (const childNode of node.children) {
        traverseAndCancel(childNode);
      }
    }
  }

  for (const category of data) {
    traverseAndCancel(category);
  }
  return data;
}

export function filterTree(data: TreeData[] = [], selectedKeys: string[] = []): TreeData[] {
  function recursiveFilter(node: TreeData): TreeData | null {
    if (node.children) {
      const filteredChildren = (node.children || []).map((child) => recursiveFilter(child)).filter(Boolean);

      if (filteredChildren.length > 0) {
        if (node.children) {
          node.children = filteredChildren as TreeData[];
        }
        return node;
      }
    }

    if (selectedKeys.includes(node.id) && !node.disable) {
      return node;
    }

    return null;
  }

  const filteredData = (data || []).map((item) => recursiveFilter(item)).filter(Boolean);
  return filteredData as TreeData[];
}

export function getTreeAllIds(treeData: TreeData[] = []): string[] {
  let ids: string[] = [];

  function recursiveExtractIds(node: TreeData): void {
    ids.push(node.id);

    if (node.children) {
      node.children.forEach((child) => recursiveExtractIds(child));
    }
  }

  treeData.forEach((item) => recursiveExtractIds(item));

  return ids;
}

export function findCheckList(keys: string[], OriginTreeData: TreeData[]): TreeData[] {
  const checkList: TreeData[] = [];
  const findCheck = (data: TreeData[]) => {
    data.forEach((item) => {
      if (keys.includes(item.id)) {
        checkList.push(item);
      }
      if (item.children) {
        findCheck(item.children);
      }
    });
  };
  findCheck(OriginTreeData);
  return checkList;
}

export const getSearchData = (expandList: string[], searchValue: string, searchData: TreeData[]): any[] => {
  const newData = searchData
    .map((item) => {
      const index = item.name.indexOf(searchValue);
      const beforeStr = item.name.substring(0, index);
      const afterStr = item.name.slice(index + searchValue.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className={styles['site-tree-search-value']}>{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.name}</span>
        );

      if (item.children) {
        const matchingChildren = getSearchData(expandList, searchValue, item.children);

        if (matchingChildren.length > 0 || item.name.includes(searchValue)) {
          expandList.push(item.id);

          const newChildren =
            item.name.includes(searchValue) && matchingChildren.length == 0
              ? (item.children || []).map((ele) => matchingChildren?.find((e) => e.id == ele.id) || ele)
              : matchingChildren;
          return { ...item, name: title, children: newChildren };
        }
      }
      return item.name.includes(searchValue) ? { ...item, name: title } : null;
    })
    .filter(Boolean);

  return newData;
};
