import { FC, ComponentPropsWithoutRef } from 'react';

import { Svg, ISvgStyleProps } from './svg-icon.styles';

import sprite from '../../assets/sprite.svg';

interface ISvgIconProps
  extends ComponentPropsWithoutRef<'svg'>,
    ISvgStyleProps {
  iconName: string;
}

const SvgIcon: FC<ISvgIconProps> = ({ iconName, ...otherProps }) => {
  return (
    <Svg {...otherProps}>
      <use xlinkHref={`${sprite}#icon-${iconName}`} />
    </Svg>
  );
};

export default SvgIcon;
