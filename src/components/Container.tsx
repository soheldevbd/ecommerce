import React from 'react';
import { twMerge } from 'tailwind-merge';
interface Props{
  children: React.ReactNode
  className?:string
}
const Container = ({ children, className }:Props) => {
  return (
    <div className={twMerge('container mx-auto px-4', className)}>
      {children}
    </div>
  );
};

export default Container;
