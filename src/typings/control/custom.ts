import { FormInstance } from 'antd';
import React from 'react';

export interface ICustomProps {
  disabled: boolean;
  form: FormInstance;
  id: string;
  label: React.ReactNode;
  name: string;
  onChange: (value: any) => void;
  prefix: boolean;
  record: any;
  size: 'small' | 'middle' | 'large';
  type: 'custom';
  value: any;
}
