import { FC, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Transition } from '@react-spring/web';

import { HeaderWrapper, BrandName, NavList, NavItem } from './header.styles';

import SvgIcon from '../svg icon/svg-icon.component';
import SideBar from '../side bar/side-bar.component';

export const scrollToId = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth',
  });
};

const Header: FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const isScreenGreaterThan600px = useMediaQuery('(min-width: 37.5em)');

  return (
    <HeaderWrapper>
      <BrandName
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Asylcreek
      </BrandName>

      {isScreenGreaterThan600px ? (
        <nav>
          <NavList>
            <NavItem onClick={() => scrollToId('about')}>About</NavItem>

            <NavItem onClick={() => scrollToId('skills')}>Skills</NavItem>

            <NavItem onClick={() => scrollToId('contact')}>Contact</NavItem>
          </NavList>
        </nav>
      ) : (
        <>
          <SvgIcon iconName="menu" big onClick={() => setIsSideBarOpen(true)} />

          <Transition
            items={isSideBarOpen}
            from={{ transform: 'translateX(10rem)' }}
            enter={{ transform: 'translateX(0)' }}
            reverse={isSideBarOpen}
            reset={isSideBarOpen}
          >
            {(styles, item) =>
              item && (
                <SideBar
                  animationStyles={styles}
                  closeSideBar={() => setIsSideBarOpen(false)}
                  scrollToId={scrollToId}
                />
              )
            }
          </Transition>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
