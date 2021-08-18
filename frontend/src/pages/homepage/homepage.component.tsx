import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

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
  Footer,
  HeroImgWrapper,
  HeroSection,
  HeroTextHello,
  HeroTextName,
  HeroTexts,
  HeroTextTitle,
  InputErrorMessage,
  Main,
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
import HNGLogo from '../../assets/brand-logo.png';

import { scrollToId } from '../../components/header/header.component';

type ContactFormValueTypes = {
  name: string;
  email: string;
  message: string;
};

const Homepage: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValueTypes>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit: SubmitHandler<ContactFormValueTypes> = async (data) => {
    //Send the message
    try {
      await axios.post('/api/v1/send-message', data);

      //Clear form values
      reset();

      alert('Your message has been sent successfully');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <Header />

      <Main>
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
              dreams to life.
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
            <div>
              <MySkillTexts>
                <p>HTML5</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </div>

            <div>
              <MySkillTexts>
                <p>CSS3</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </div>

            <div>
              <MySkillTexts>
                <p>JavaScript</p>

                <p>90%</p>
              </MySkillTexts>

              <MySkillProgress amount={90} />
            </div>

            <div>
              <MySkillTexts>
                <p>React</p>

                <p>90%</p>
              </MySkillTexts>

              <MySkillProgress amount={90} />
            </div>

            <div>
              <MySkillTexts>
                <p>NextJS</p>

                <p>75%</p>
              </MySkillTexts>

              <MySkillProgress amount={75} />
            </div>

            <div>
              <MySkillTexts>
                <p>NodeJS</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </div>

            <div>
              <MySkillTexts>
                <p>Git</p>

                <p>80%</p>
              </MySkillTexts>

              <MySkillProgress amount={80} />
            </div>

            <div>
              <MySkillTexts>
                <p>MongoDB</p>

                <p>85%</p>
              </MySkillTexts>

              <MySkillProgress amount={85} />
            </div>
          </MySkills>
        </MySkillsSection>

        {/* Contact Section */}
        <ContactSection id="contact">
          <SectionHeading>Contact me</SectionHeading>

          <ContactFormTexts>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <ContactFormInputContainer error={errors?.name ? true : false}>
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Please enter your name' })}
                />

                {errors?.name && (
                  <InputErrorMessage>{errors?.name.message}</InputErrorMessage>
                )}
              </ContactFormInputContainer>

              <ContactFormInputContainer error={errors?.email ? true : false}>
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Please enter your email',
                  })}
                />

                {errors?.email && (
                  <InputErrorMessage>{errors?.email.message}</InputErrorMessage>
                )}
              </ContactFormInputContainer>

              <ContactFormInputContainer error={errors?.message ? true : false}>
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  {...register('message', {
                    required: 'Please enter your message',
                  })}
                />

                {errors?.message && (
                  <InputErrorMessage>
                    {errors?.message.message}
                  </InputErrorMessage>
                )}
              </ContactFormInputContainer>

              <Button disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
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
      </Main>

      <Footer>
        <h4>Boro Omokugbo</h4>

        <p>Full stack web developer & avid problem solver</p>

        <div>
          <a href="https://hng.tech/">
            <img src={HNGLogo} alt="HNG logo" />
          </a>
        </div>

        <p>
          Template from{' '}
          <a href="https://templateflip.com/demo/templates/super-folio/">
            Super Folio
          </a>
        </p>
      </Footer>
    </>
  );
};

export default Homepage;
