import styled from 'styled-components';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

const MenuList = [
  {
    name: 'Home',
    url: '/',
    icon: HomeRoundedIcon,
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: FolderCopyRoundedIcon,
  },
  {
    name: 'Tasks',
    url: '/tasks',
    icon: FormatListBulletedRoundedIcon,
  },
  {
    name: 'Billing',
    url: '/billing',
    icon: RequestQuoteRoundedIcon,
  },
  {
    name: 'Clients',
    url: '/clients',
    icon: Person2RoundedIcon,
  },
];

const StyledNavigation = styled.div`
  margin-top: 5rem;
  flex: 2;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    display: flex;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: #9a9a9a;

    &:hover {
      color: unset;
      background-color: #383838;
      transition: all 0.2s ease-in-out;
    }

    & .icon {
      margin-right: 1rem;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        {MenuList.map((item) => (
          <a href={item.url}>
            <li>
              {<item.icon className="icon" />}
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;

