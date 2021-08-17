import styled from 'styled-components';

import { colors } from '../../global.styles';

export interface ISvgStyleProps {
  image?: boolean;
  big?: boolean;
}

export const Svg = styled.svg<ISvgStyleProps>`
  fill: ${colors.dark};
  height: 1.6rem;
  width: 1.6rem;

  ${({ image }) => image && 'width: 7.1rem; height: 6rem;'}

  ${({ big }) => big && 'height: 2.4rem; width: 2.4rem;'}
`;
