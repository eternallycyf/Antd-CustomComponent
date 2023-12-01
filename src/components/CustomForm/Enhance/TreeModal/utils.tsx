import { TreeData } from './index';
import styles from './index.less';
import _ from 'lodash';

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

export const treeToArray = (tree: TreeData[]): TreeData[] => {
  let stack = tree,
    result = [];
  while (stack.length !== 0) {
    let pop = stack.pop();
    result.push(
      _.omit(
        {
          id: pop!.id,
          name: pop!.name,
          pid: pop!.pid,
          ...pop,
        },
        'children',
      ),
    );
    let children = pop!.children;
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
      }
    }
  }
  return (result as TreeData[]) || [];
};

export const getSearchData = (filterIds: any[], expandList: string[], searchValue: string, searchData: TreeData[]): any[] => {
  const arrayData: TreeData[] = treeToArray(_.cloneDeep(searchData));

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
          item.name
        );

      if (item.children) {
        const matchingChildren = getSearchData(filterIds, expandList, searchValue, item.children);

        if (matchingChildren.length > 0 || item.name.includes(searchValue)) {
          expandList.push(item.id);

          let otherList: TreeData[] = [];
          const isOther = item.name.includes(searchValue) && matchingChildren.length == 0;
          if (isOther) {
            otherList = (item.children || []).map((ele) => matchingChildren?.find((e) => e.id == ele.id) || ele);
          } else {
            let cacheList: TreeData[] = [];
            item.children.forEach((ele) => {
              const isLast = !arrayData.some((e) => e.pid == ele.id);
              const isHigh = matchingChildren.some((e) => e.id == ele.id);
              //@ts-ignore
              if (isLast && !isHigh && !filterIds.includes(ele?.pid)) {
                cacheList.push(ele);
              }
            });
            otherList = [...cacheList, ...matchingChildren];
          }

          return { ...item, name: title, children: otherList };
        }
      }
      return item.name.includes(searchValue) ? { ...item, name: title } : null;
    })
    .filter(Boolean);

  return newData;
};

export function findChildrenIds(data: TreeData[], targetIds: string[]): string[] {
  const resultIds: string[] = [];

  function traverse(items: TreeData[], id: string, isCheckAll = false) {
    items.forEach((item) => {
      if (item.id === id) {
        resultIds.push(item.id);
        if (item.children && item.children.length > 0) {
          item.children.forEach((child) => {
            if (isCheckAll) {
              resultIds.push(child.id);
            }
            traverse(item.children!, child.id, true);
          });
        }
      } else if (item.children) {
        traverse(item.children, id);
      }
    });
  }

  targetIds.forEach((id) => traverse(data, id));

  return [...new Set(resultIds.concat(targetIds))];
}

export function findChildrenId(data: TreeData[], targetId: string): string[] {
  const resultIds: string[] = [];

  function traverse(items: TreeData[], id: string) {
    items.forEach((item) => {
      if (item.id === id) {
        resultIds.push(item.id);
        if (item.children && item.children.length > 0) {
          item.children.forEach((child) => {
            traverse(item.children!, child.id);
          });
        }
      } else if (item.children) {
        traverse(item.children, id);
      }
    });
  }

  traverse(data, targetId);

  return [...new Set(resultIds)];
}

export function findNodeAndDescendants(tree: TreeData[], targetId: any) {
  const result: any[] = [];

  function find(node: TreeData, isMatch = false) {
    if (node.id == targetId || isMatch) {
      result.push(node.id);

      for (const child of node.children || []) {
        find(child, true);
      }

      return;
    }

    for (const child of node.children || []) {
      find(child);
    }
  }

  for (const node of tree) {
    find(node);
  }

  return result;
}

export const getAllNodePath = (tree: TreeData[], id: any): any[] => {
  if (!Array.isArray(tree) || tree.length === 0) {
    return [];
  }

  const findPathRecursive = (node: TreeData, targetId: any, currentPath: any[], isMatch = false): any[] => {
    currentPath.push(node.id);

    if (node.id === targetId || isMatch) {
      if (node.children) {
        for (const child of node.children) {
          const childPath = findPathRecursive(child, targetId, currentPath.slice(), true);
          if (childPath.length > 0) {
            return childPath;
          }
        }
      }
      return currentPath;
    }

    if (node.children) {
      for (const child of node.children) {
        const childPath = findPathRecursive(child, targetId, currentPath.slice());
        if (childPath.length > 0) {
          return childPath;
        }
      }
    }

    return [];
  };

  for (const topLevelNode of tree) {
    const path = findPathRecursive(topLevelNode, id, []);
    if (path.length > 0) {
      return path;
    }
  }

  return [];
};

export const getCurrentNodePath = (tree: TreeData[], id: any): any[] => {
  if (!Array.isArray(tree) || tree.length === 0) {
    return [];
  }

  const findPathRecursive = (node: TreeData, targetId: any, currentPath: any[]): any[] => {
    currentPath.push(node.id);

    if (node.id === targetId) {
      return currentPath;
    }

    if (node.children) {
      for (const child of node.children) {
        const childPath = findPathRecursive(child, targetId, currentPath.slice());
        if (childPath.length > 0) {
          return childPath;
        }
      }
    }

    return [];
  };

  for (const topLevelNode of tree) {
    const path = findPathRecursive(topLevelNode, id, []);
    if (path.length > 0) {
      return path;
    }
  }

  return [];
};
