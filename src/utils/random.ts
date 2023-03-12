/**
 *随机生成16位UUID
 * @return {string} 生成的uuid
 */
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // @ts-ignore
    // tsLint:disable-next-Line: no-bitwise
    return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8').toString(16);
  });
}
