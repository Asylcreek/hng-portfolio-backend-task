import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Transition } from '@react-spring/web';

import { HeaderWrapper, BrandName, NavList, NavItem } from './header.styles';

import SvgIcon from '../svg icon/svg-icon.component';
import SideBar from '../side bar/side-bar.component';

const Header: FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const isScreenGreaterThan600px = useMediaQuery('(min-width: 37.5em)');

  return (
    <HeaderWrapper>
      <Link to="/">
        <BrandName>Asylcreek</BrandName>
      </Link>

      {isScreenGreaterThan600px ? (
        <nav>
          <NavList>
            <NavItem>
              <Link to="#about">About</Link>
            </NavItem>

            <NavItem>
              <Link to="#skills">Skills</Link>
            </NavItem>

            <NavItem>
              <Link to="#experience">Experience</Link>
            </NavItem>

            <NavItem>
              <Link to="#contact">Contact</Link>
            </NavItem>
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
