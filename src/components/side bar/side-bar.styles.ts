import styled from 'styled-components';
import { rgba } from 'polished';
import { animated } from '@react-spring/web';

import { colors } from '../../global.styles';

export const SideBarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${rgba(`${colors.dark}`, 0.25)};
  z-index: 9999999999;
`;

export const SideBarWrapper = styled(animated.nav)`
  z-index: 99999999999;
  width: 31rem;
  font-size: 1.4rem;
  line-height: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: ${colors.white};
  padding: 5.2rem 4.8rem 6.4rem;
  padding-left: 3.8rem;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 1.3rem 3.6rem rgba(0, 0, 0, 0.22));

  & > svg:first-of-type {
    align-self: flex-end;
    cursor: pointer;
    position: fixed;
    top: 5.2rem;
    right: 4.8rem;
  }
`;

export const SideBarLinks = styled.ul`
  margin-top: calc(2.4rem + 5.8rem);
  padding-bottom: 2rem;
  padding-left: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;

  & > button {
    width: 17.4rem;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const SideBarLink = styled.li`
  font-weight: 600;
  width: fit-content;
  padding: 2px 2.7rem 2px 1.6rem;

  & > a {
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-bottom: 3.6rem;
  }
`;
