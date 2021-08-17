import { FC } from 'react';

interface ISideBarProps {
  closeSideBar: () => void;
  animationStyles?: Record<string, unknown>;
}

import {
  SideBarOverlay,
  SideBarWrapper,
  SideBarLinks,
  SideBarLink,
} from './side-bar.styles';

import SvgIcon from '../svg icon/svg-icon.component';
import { Link } from 'react-router-dom';

const SideBar: FC<ISideBarProps> = ({ closeSideBar, animationStyles }) => {
  return (
    <>
      <SideBarOverlay onClick={() => closeSideBar()} />

      <SideBarWrapper style={animationStyles}>
        <SvgIcon iconName="close" big onClick={() => closeSideBar()} />

        <SideBarLinks>
          <SideBarLink>
            <Link to="#about">About</Link>
          </SideBarLink>

          <SideBarLink>
            <Link to="#skills">Skills</Link>
          </SideBarLink>

          <SideBarLink>
            <Link to="#experience">Experience</Link>
          </SideBarLink>

          <SideBarLink>
            <Link to="#contact">Contact</Link>
          </SideBarLink>
        </SideBarLinks>
      </SideBarWrapper>
    </>
  );
};

export default SideBar;
