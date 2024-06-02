import React from 'react';

type InputUIProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  classname?: string;
};

const InputUI: React.FC<InputUIProps> = ({ rightIcon, leftIcon, type = 'text', placeholder = '', classname }) => {
  return (
    <div className='relative flex items-center justify-center gap-4'>
      {leftIcon && <div className='absolute left-3'>{leftIcon}</div>}
      <input type={type} className={classname} placeholder={placeholder} />
      {rightIcon && <div className='absolute right-3'>{rightIcon}</div>}
    </div>
  );
};

export default InputUI;
