import React from 'react';

type TodoTemplateProps = {
  children: React.ReactNode;
};

export default function TodoTemplate({ children }: TodoTemplateProps) {
  return <div className="TodoTemplate">{children}</div>;
}