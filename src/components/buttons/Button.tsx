import React from 'react';

const Button = ({
  className,
  text,
  icon,
}: {
  className?: string;
  text: string;
  icon?: React.ReactNode;
}) => {
  return (
    <button className={`${className} rounded-lg flex gap-4`}>
      {text}
      {icon && icon}
    </button>
  );
};

export default Button;
