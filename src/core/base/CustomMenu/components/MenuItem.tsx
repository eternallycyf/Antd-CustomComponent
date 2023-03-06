import React from 'react';

interface IMenuItemProps {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

export default function MenuItem(props: IMenuItemProps) {
  const { children, className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
