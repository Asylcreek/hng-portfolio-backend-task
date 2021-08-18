import styled from 'styled-components';

import { colors } from '../../global.styles';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  font-family: inherit;
  font-weight: 700;
  text-transform: capitalize;
  padding: 1rem 3rem;
  background-color: ${colors.primary};
  color: #000;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
  cursor: pointer;
  transition-property: background-color, color;
  transition-duration: 0.2s;

  & > svg {
    margin-left: 1rem;
    height: 1.3rem;
    width: 1.3rem;
    transition: fill 0.2s;
  }

  &:hover,
  &:focus-visible {
    /* outline-color: ${colors.primary}; */
    background-color: ${colors.dark};
    color: ${colors.primary};

    & > svg {
      fill: ${colors.primary};
    }
  }
`;
