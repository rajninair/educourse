import { Button, Icon, VStack } from '@chakra-ui/react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      // h={'100vh'}
      // bgColor={'blue.500'}
      spacing={'8'}
      padding={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <LinkButton
        url="dashboard"
        Icon={RiDashboardFill}
        text="Dashboard"
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        url="createcourse"
        Icon={RiAddCircleFill}
        text="Create Course"
        active={location.pathname === '/admin/createcourse'}
      />
      <LinkButton
        url="courses"
        Icon={RiEyeFill}
        text="Courses"
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        url="users"
        Icon={RiUser3Fill}
        text="Users"
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};
export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'larger'}
        variant={'ghost'}
        colorScheme={active ? 'purple' : ''}
        fontWeight={active ? 'bold' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}
