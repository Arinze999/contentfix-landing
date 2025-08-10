import React from 'react';

const Button = ({
  className,
  text,
  icon,
  left,
  disabled,
}: {
  className?: string;
  text: string;
  icon?: React.ReactNode;
  left?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${className} cursor-pointer rounded-2xl flex gap-3 justify-center items-center text-sm md:text-md text-nowrap disabled:cursor-help`}
      disabled={disabled}
    >
      {left && icon && icon}
      {text}
      {!left && icon && icon}
    </button>
  );
};

export default Button;
