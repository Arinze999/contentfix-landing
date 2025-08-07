import React from 'react';

const Button = ({
  className,
  text,
  icon,
  left,
}: {
  className?: string;
  text: string;
  icon?: React.ReactNode;
  left?: boolean;
}) => {
  return (
    <button className={`${className} rounded-2xl flex gap-3 justify-center items-center text-sm md:text-md text-nowrap`}>
      {left && icon && icon}
      {text}
      {!left && icon && icon}
    </button>
  );
};

export default Button;
