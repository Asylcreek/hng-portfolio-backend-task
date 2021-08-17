import { createGlobalStyle } from 'styled-components';

export const colors = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  white: '#fff',
  gray: '#6c757d',
  grayDark: '#343a40',
  primary: '#F6E05E',
  secondary: '#343a40',
  success: '#37BC9B',
  info: '#3BAFDA',
  warning: '#F6BB42',
  danger: '#E9573F',
  light: '#f4f6f8',
  dark: '#212529',
  gradient:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
};

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body{
        font-family: "Nunito Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${colors.dark};
        background-color: ${colors.white};
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    li{
        list-style: none;
    }
`;

export default GlobalStyles;
