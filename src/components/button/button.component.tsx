import { FC, ComponentPropsWithoutRef, ReactNode } from 'react';

import { Btn } from './button.styles';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...otherProps }) => {
  return <Btn {...otherProps}>{children}</Btn>;
};

export default Button;
