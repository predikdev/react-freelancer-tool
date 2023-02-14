import styled from 'styled-components';
import Wrapper from './Wrapper';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StyledSidebar = styled.aside`
  min-height: 100vh;
  background-color: #313131;
  border-right: 1px solid #383838;
  color: #f5f5f5;
`;

const StyledH1 = styled.h1`
  font-size: 1.25rem;
`;

const StyledWrapper = styled(Wrapper)`
  min-height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledWrapper>
        <StyledH1>Welcome back Jasper</StyledH1>
        <Navigation />
        <Footer />
      </StyledWrapper>
    </StyledSidebar>
  );
};
export default Sidebar;

