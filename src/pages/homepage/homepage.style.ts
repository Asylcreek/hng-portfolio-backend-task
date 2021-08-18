import styled from 'styled-components';

import { colors } from '../../global.styles';

import Marker from '../../assets/marker.svg';
import Waves from '../../assets/waves.svg';

export const Main = styled.main``;

export const HeroSection = styled.section`
  position: relative;
  background-color: ${colors.light};
  padding: 1.5rem 3rem 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 20em) {
    padding: 2.4rem;
    padding-bottom: 4rem;
  }

  @media only screen and (min-width: 48.75em) {
    padding: 2.4rem 6.4rem;
  }

  @media only screen and (min-width: 65.625em) {
  }
`;

export const HeroImgWrapper = styled.div`
  width: 32rem;
  margin-bottom: 6rem;
  transition: width 0.2s;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media only screen and (min-width: 50em) {
    width: 42rem;
    margin-right: 5rem;
  }
`;

export const HeroTexts = styled.div`
  @media only screen and (min-width: 50em) {
    margin-top: 7rem;
  }
`;

export const HeroTextHello = styled.p`
  font-weight: 300;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 1px;

  @media only screen and (min-width: 50em) {
    margin-bottom: 2rem;
  }
`;

export const HeroTextName = styled.h1`
  font-weight: 800;
  font-size: calc(2.2rem + 1.5vw);
  position: relative;
  margin-bottom: 3.5rem;

  &::after {
    content: '';
    width: 12.5rem;
    height: 3rem;
    position: absolute;
    top: 2.8rem;
    right: 50%;
    transform: translateX(50%);
    background-image: url(${Marker});
    background-repeat: no-repeat;
    pointer-events: none;

    @media only screen and (min-width: 50em) {
      top: 3.5rem;
      right: 25%;
    }
  }

  @media only screen and (min-width: 50em) {
    margin-bottom: 5rem;
  }
`;

export const HeroTextTitle = styled.p`
  font-size: 2rem;
  text-transform: capitalize;
  margin-bottom: 2.5rem;
`;

export const WavesWrapper = styled.div`
  width: 100%;
  min-width: 60rem;
  height: 22rem;
  background-image: url(${Waves});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
`;

export const AboutSection = styled.section`
  position: relative;
  padding: 23rem 3rem 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;

  @media only screen and (max-width: 20em) {
    padding-top: 38rem;
  }

  @media only screen and (max-width: 20em) {
    padding: 20rem 2.4rem 7rem;
  }

  @media only screen and (min-width: 48.75em) {
    padding: 23rem 6.4rem 5rem;
  }
`;

export const AboutSectionTextWrapper = styled.div`
  max-width: 50rem;

  @media only screen and (min-width: 61.875em) {
    margin-right: 5rem;
  }
  @media only screen and (min-width: 71.875em) {
    margin-right: 10rem;
  }
`;

export const AboutSectionHeading = styled.h2`
  font-size: calc(2rem + 0.3vw);
  font-weight: 700;
  text-transform: capitalize;
`;

export const AboutSectionText = styled.p`
  margin: 1.6rem 0;
`;

export const AboutSectionListItem = styled.li`
  display: flex;

  & > span:first-of-type {
    margin-right: 1.5rem;
  }

  & > span:last-of-type {
    font-weight: 600;

    & > a {
      text-decoration: underline;
    }
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const AboutSectionImgWrapper = styled.div`
  margin: 6rem 0 0;
  height: 32rem;
  width: 32rem;
  border-radius: 3rem;
  overflow: hidden;
  transition-property: width, height;
  transition-duration: 0.2s;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 50em) {
    height: 37rem;
    width: 37rem;
  }

  @media only screen and (min-width: 65.625em) {
    margin-top: 0;
  }
`;

export const SectionHeading = styled.h2`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 6rem;
  text-transform: capitalize;
  font-size: 3.2rem;
  font-weight: 700;

  &::after {
    content: '';
    width: 12.5rem;
    height: 3rem;
    position: absolute;
    top: 3.5rem;
    right: 50%;
    transform: translateX(50%);
    background-image: url(${Marker});
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

export const MySkillsSection = styled.section`
  padding: 1.5rem 3rem 5rem;

  @media only screen and (max-width: 20em) {
    padding: 2.4rem;
    padding-bottom: 4rem;
  }

  @media only screen and (min-width: 48.75em) {
    padding: 2.4rem 6.4rem;
  }
`;

export const MySkillsSubHeading = styled.p`
  max-width: 60rem;
  margin: 0 auto;
  margin-bottom: 3.2rem;
  text-align: center;
`;

export const MySkills = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  background-color: ${colors.light};
  padding: 3.2rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 38.6rem));
  column-gap: 15rem;
  row-gap: 2rem;
`;

export const MySkill = styled.div``;

export const MySkillTexts = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;

interface IMySkillProgressProps {
  amount: number;
}

export const MySkillProgress = styled.div<IMySkillProgressProps>`
  position: relative;
  margin-top: 8px;
  width: 100%;
  height: 1.6rem;
  background-color: #e9ecef;
  border-radius: 1rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ amount }: IMySkillProgressProps) => `${amount}%`};
    background-color: ${colors.primary};
  }
`;

export const ContactSection = styled.section`
  padding: 5rem;

  & > h2 {
    margin-bottom: 9rem;
  }

  @media only screen and (max-width: 20em) {
    padding: 2.4rem;
    padding-bottom: 4rem;
  }

  @media only screen and (min-width: 48.75em) {
    padding: 5rem;
  }
`;

export const ContactFormTexts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContactForm = styled.form`
  background-color: ${colors.light};
  padding: 3.2rem;
  width: 100%;
  max-width: 50rem;

  @media only screen and (min-width: 68.75em) {
    margin-right: 2.5rem;
  }
`;

export const ContactFormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > label {
    margin-bottom: 1rem;
    font-weight: 700;
  }

  & > input,
  & > textarea {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    padding: 0.8rem 1.2rem;
    background-color: ${colors.white};
    border: 2px solid #e9ecef;
    border-radius: 1rem;
    transition-property: border-color, box-shadow;
    transition-duration: 0.2s;

    &:focus {
      border-color: rgba(246, 224, 94, 0.25);
      outline: none;
      box-shadow: 0 0 0 0.25rem rgba(246, 224, 94, 0.25);
    }
  }

  & > textarea {
    resize: none;
    height: 12rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }

  &:last-of-type {
    margin-bottom: 3.2rem;
  }
`;

export const ContactTexts = styled.div`
  padding-top: 4rem;
  max-width: 50rem;
  transition: padding 0.2s;

  & > h3 {
    font-size: 20px;
    font-weight: 700;
  }

  & > p {
    margin: 2rem 0;
  }

  @media only screen and (min-width: 68.75em) {
    padding-top: 2rem;
  }
`;

export const Footer = styled.footer`
  position: relative;
  padding: 5rem;
  background-color: ${colors.light};
  text-align: center;

  & > div {
    width: 20rem;
    margin: 0 auto 2rem;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  & > h4 {
    font-size: 2rem;
    font-weight: 700;
  }

  & > p:first-of-type {
    margin: 2rem 0;
  }

  & > p:last-of-type {
    & > a {
      text-decoration: underline;
    }
  }
`;
