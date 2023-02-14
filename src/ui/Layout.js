import styled from 'styled-components';

import Content from './Content';
import Sidebar from './Sidebar';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 300px) 1fr;
`;

const Layout = () => {
  return (
    <StyledGrid>
      <Sidebar />
      <Content />
    </StyledGrid>
  );
};

export default Layout;

