import React, { useState, useEffect } from 'react';
export const imageInfo = {
  pdf: require('@/assets/icon/pdf.png'),
  pdg: require('@/assets/icon/pdf.png'),
  jpg: require('@/assets/icon/jpg.png'),
  rar: require('@/assets/icon/rar.png'),
  zip: require('@/assets/icon/zip.png'),
  docx: require('@/assets/icon/docx.png'),
  doc: require('@/assets/icon/docx.png'),
  xlsx: require('@/assets/icon/xlsx.png'),
  xls: require('@/assets/icon/xlsx.png'),
  other: require('@/assets/icon/other.png'),
};

interface IFileImageProps {
  fileName: string;
  style?: React.CSSProperties;
  className?: string;
}

function getFileAfter(fileName: string) {
  const file = fileName.split('.');
  return file[file.length - 1];
}

export default function FileImage(props: IFileImageProps) {
  const { fileName, style = {}, className } = props;
  const [src, setSrc] = useState(imageInfo.other);

  useEffect(() => {
    const srcInfo = imageInfo[getFileAfter(fileName)];
    setSrc(srcInfo || imageInfo.other);
  }, []);

  return <img {...{ src, style, className }} />;
}
