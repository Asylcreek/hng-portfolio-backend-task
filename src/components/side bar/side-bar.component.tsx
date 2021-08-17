import { FC } from 'react';

interface ISideBarProps {
  closeSideBar: () => void;
  animationStyles?: Record<string, unknown>;
  scrollToId: (id: string) => void;
}

import {
  SideBarOverlay,
  SideBarWrapper,
  SideBarLinks,
  SideBarLink,
} from './side-bar.styles';

import SvgIcon from '../svg icon/svg-icon.component';

const SideBar: FC<ISideBarProps> = ({
  closeSideBar,
  animationStyles,
  scrollToId,
}) => {
  return (
    <>
      <SideBarOverlay onClick={() => closeSideBar()} />

      <SideBarWrapper style={animationStyles}>
        <SvgIcon iconName="close" big onClick={() => closeSideBar()} />

        <SideBarLinks>
          <SideBarLink onClick={() => scrollToId('about')}>About</SideBarLink>

          <SideBarLink onClick={() => scrollToId('skills')}>Skills</SideBarLink>

          <SideBarLink onClick={() => scrollToId('contact')}>
            Contact
          </SideBarLink>
        </SideBarLinks>
      </SideBarWrapper>
    </>
  );
};

export default SideBar;
