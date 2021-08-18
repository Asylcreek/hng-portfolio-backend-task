import { FC } from 'react';

import {
  AboutSection,
  AboutSectionHeading,
  AboutSectionImgWrapper,
  AboutSectionListItem,
  AboutSectionText,
  AboutSectionTextWrapper,
  ContactForm,
  ContactFormInputContainer,
  ContactFormTexts,
  ContactSection,
  ContactTexts,
  HeroImgWrapper,
  HeroSection,
  HeroTextHello,
  HeroTextName,
  HeroTexts,
  HeroTextTitle,
  MySkill,
  MySkillProgress,
  MySkills,
  MySkillsSection,
  MySkillsSubHeading,
  MySkillTexts,
  SectionHeading,
  WavesWrapper,
} from './homepage.style';

import Header from '../../components/header/header.component';
import Button from '../../components/button/button.component';
import SvgIcon from '../../components/svg icon/svg-icon.component';

import Person from '../../assets/person.svg';
import Me from '../../assets/me2.jpg';

import { scrollToId } from '../../components/header/header.component';

const Homepage: FC = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection>
          <HeroImgWrapper>
            <img
              src={Person}
              alt="An illustration of a person sitting by a table with a laptop"
            />
          </HeroImgWrapper>

          <HeroTexts>
            <HeroTextHello>Hello!</HeroTextHello>

            <HeroTextName>I am Boro Omokugbo</HeroTextName>

            <HeroTextTitle>
              A full stack web developer & avid problem solver
            </HeroTextTitle>

            <Button type="button" onClick={() => scrollToId('contact')}>
              Get in touch! <SvgIcon iconName="arrow-right" />
            </Button>
          </HeroTexts>
        </HeroSection>

        {/* About Section */}
        <AboutSection id="about">
          <WavesWrapper />

          <AboutSectionTextWrapper>
            <AboutSectionHeading>Hello! I'm Boro Omokugbo</AboutSectionHeading>

            <AboutSectionText>
              I am passionate about bringing users the best browsing experience
              possible. I am a skilled front end and back end web developer, and
              I use tools such as NextJS, ReactJS, NodeJS, MongoDB to bring
              dreams to live.
            </AboutSectionText>

            <ul>
              <AboutSectionListItem>
                <span>Email:</span>
                <span>
                  <a href="mailto:omokugbobr@gmail.com">omokugbobr@gmail.com</a>
                </span>
              </AboutSectionListItem>

              <AboutSectionListItem>
                <span>Phone:</span>
                <span>
                  <a href="tel:+2349068982847">+2349068982847</a>
                </span>
              </AboutSectionListItem>

              <AboutSectionListItem>
                <span>Address:</span>
                <span>Surulere, Lagos</span>
              </AboutSectionListItem>

              <AboutSectionListItem>
                <span>Status:</span>
                <span>Available</span>
              </AboutSectionListItem>
            </ul>
          </AboutSectionTextWrapper>

          <AboutSectionImgWrapper>
            <img src={Me} alt="Boro Omokugbo Joseph" />
          </AboutSectionImgWrapper>
        </AboutSection>

        {/* My Skills Section */}
        <MySkillsSection id="skills">
          <SectionHeading>My skills</SectionHeading>

          <MySkillsSubHeading>
            I am a quick learner and I specialize in a multitude of skills
            required for both front end and back end web development
          </MySkillsSubHeading>

          <MySkills>
            <MySkill>
              <MySkillTexts>
                <p>HTML5</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </MySkill>

            <MySkill>
              <MySkillTexts>
                <p>CSS3</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </MySkill>

            <MySkill>
              <MySkillTexts>
                <p>JavaScript</p>

                <p>90%</p>
              </MySkillTexts>

              <MySkillProgress amount={90} />
            </MySkill>

            <MySkill>
              <MySkillTexts>
                <p>React</p>

                <p>90%</p>
              </MySkillTexts>

              <MySkillProgress amount={90} />
            </MySkill>

            <MySkill>
              <MySkillTexts>
                <p>NextJS</p>

                <p>75%</p>
              </MySkillTexts>

              <MySkillProgress amount={75} />
            </MySkill>

            <MySkill>
              <MySkillTexts>
                <p>NodeJS</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </MySkill>

            <MySkill>
              <MySkillTexts>
                <p>Git</p>

                <p>80%</p>
              </MySkillTexts>

              <MySkillProgress amount={80} />
            </MySkill>

            <MySkill>
              <MySkillTexts>
                <p>MongoDB</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </MySkill>
          </MySkills>
        </MySkillsSection>

        {/* Contact Section */}
        <ContactSection id="contact">
          <SectionHeading>Contact me</SectionHeading>

          <ContactFormTexts>
            <ContactForm>
              <ContactFormInputContainer>
                <label htmlFor="name">Name</label>

                <input type="text" name="name" id="name" />
              </ContactFormInputContainer>

              <ContactFormInputContainer>
                <label htmlFor="email">Email</label>

                <input type="email" name="email" id="email" />
              </ContactFormInputContainer>

              <ContactFormInputContainer>
                <label htmlFor="message">Message</label>

                <textarea name="message" id="message" />
              </ContactFormInputContainer>

              <Button type="button">Send</Button>
            </ContactForm>

            <ContactTexts>
              <h3>Let's talk about that problem</h3>

              <p>
                Want to avail my services? Drop a message for me using the form
                or get in touch using my email or phone number
              </p>

              <ul>
                <AboutSectionListItem>
                  <span>Email:</span>
                  <span>
                    <a href="mailto:omokugbobr@gmail.com">
                      omokugbobr@gmail.com
                    </a>
                  </span>
                </AboutSectionListItem>

                <AboutSectionListItem>
                  <span>Phone:</span>
                  <span>
                    <a href="tel:+2349068982847">+2349068982847</a>
                  </span>
                </AboutSectionListItem>
              </ul>
            </ContactTexts>
          </ContactFormTexts>
        </ContactSection>
      </main>

      <footer></footer>
    </>
  );
};

export default Homepage;
