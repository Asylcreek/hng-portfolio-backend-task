import styled from 'styled-components';

import { colors } from '../../global.styles';

export const HeaderWrapper = styled.header`
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  background-color: ${colors.white};
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
  transition: padding 0.2s;

  & > svg {
    cursor: pointer;
  }

  @media only screen and (max-width: 20em) {
    padding: 2.4rem;
    padding-bottom: 1.2rem;
  }

  @media only screen and (min-width: 48.75em) {
    padding: 2.4rem 6.4rem;
  }
`;

export const BrandName = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  font-weight: 600;
  margin-right: 2.4rem;
  text-transform: capitalize;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;
