import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

export enum ButtonColors {
  yellow = 'yellow',
  green = 'green',
}

export enum ButtonSize {
  default = 'default',
  small = 'small',
}

interface ButtonProps {
  noMaxWidth?: boolean;
  color?: ButtonColors;
  size?: ButtonSize;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = ButtonSize.default,
  onClick,
  color = ButtonColors.green,
  noMaxWidth,
}) => {
  const selectBgColors = (propColor: string) => {
    if (propColor === ButtonColors.green) {
      return s.bgGreen;
    }
    if (propColor === ButtonColors.yellow) {
      return s.bgYellow;
    }
  };

  const selectSize = (propSize: string) => {
    if (propSize === ButtonSize.default) {
      return s.defaultSize;
    }
    if (propSize === ButtonSize.small) {
      return s.smallSize
    }
  };

  return (
    <button
      type="button"
      className={cn(s.root, selectBgColors(color), selectSize(size), { [s.noMaxWidth]: noMaxWidth })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
