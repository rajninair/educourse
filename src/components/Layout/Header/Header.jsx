import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => {
  return (
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = false;

  const user = {
    role: 'admin',
  };
  const logoutHandler = () => {
    console.log('Logged out...');
    onClose();
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        rounded="full"
        position={'fixed'}
        top="6"
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader borderBottom={'1px'}>Courses</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request A Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About" />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine style={{ margin: '4px' }} />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>{' '}
                    <p>OR</p>
                    <Link colorScheme={'yellow'} to="/register">
                      <Button>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
          {/* <DrawerFooter>Footer</DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Header;
