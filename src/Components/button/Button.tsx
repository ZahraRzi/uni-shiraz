import React from 'react';
import {Button as AntButton} from 'antd';
import {BaseButtonProps} from 'antd/lib/button/button';

interface ButtonProps extends BaseButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props): React.ReactElement => {
  const {children, style, className, ...otherProps} = props;
  return (
    <AntButton
      style={style}
      className={className ? className : ''}
      {...otherProps}
    >
      {children}
    </AntButton>
  );
};

export default Button;
