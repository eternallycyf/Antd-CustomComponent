export const ACTIVE_TYPE = [
  { text: '满折', value: '0' },
  { text: '满减', value: '1' },
  { text: '立减', value: '2' },
] as const;

export const DEFAULT_ACTIVE_TYPE = ACTIVE_TYPE[0]['value'];

export const STATUS_DICT = [
  { text: '满折', value: '0' },
  { text: '满减', value: '1' },
  { text: '立减', value: '2' },
] as const;

export const DEFAULT_STATUS = STATUS_DICT[0]['value'];
