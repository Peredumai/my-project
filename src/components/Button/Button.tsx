import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'white' | 'grey' | 'outline' | 'textbtn';
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'block' | 'none';
  disabled?: boolean | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'blue',
  size = 'none',
  disabled = false,
  className: classNameProp,
  ...props
}) => {
  const colors = {
    blue: styles.blue,
    white: styles.white,
    grey: styles.grey,
    outline: styles.outline,
    textbtn: styles.textbtn
  };
  const sizes = {
    extraSmall: styles.extraSmall,
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
    large: styles.sizeLarge,
    extraLarge: styles.extraLarge,
    block: styles.sizeBlock,
    none: styles.none
  };
  const className = clsx(
    styles.btn,
    colors[color],
    sizes[size],
    classNameProp,
  );

  return (
    <button type="button" disabled={disabled} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
