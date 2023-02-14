import styled from 'styled-components';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Wrapper from '../ui/Wrapper';

const StyledFooter = styled.footer`
  border-top: 1px solid #4c4c4c;

  .icon {
    margin-right: 1rem;
  }

  .footer {
    width: 100%;
    display: flex;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: #9a9a9a;
    cursor: pointer;

    &:hover {
      color: unset;
      background-color: #383838;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const StyledWrapper = styled(Wrapper)`
  min-height: 100%;
  display: flex;
  padding: 1rem 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <div className="footer">
          <SettingsRoundedIcon className="icon" />
          <span>Settings</span>
        </div>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;

