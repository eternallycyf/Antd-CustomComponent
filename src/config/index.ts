export const apiPrefixMock: string =
  process.env.NODE_ENV === 'development' ? '/api' : '/api';
export const tokenKey: string = 'acpauth';
export const agentId: string =
  process.env.NODE_ENV === 'development' ? '1480492321' : '1583908988';
