import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.jpeg';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useState } from 'react';

const Users = () => {
  const uarray = [
    {
      _id: 'Fdfdfddf',
      name: 'rmn',
      role: 'admin',
      subscription: {
        status: 'active',
      },
      email: 'rajni@gmail.com',
    },
    {
      _id: 'dgfgffdgfg',
      name: 'tmn',
      role: 'admin',
      subscription: {
        status: 'active',
      },
      email: 'tmn@gmail.com',
    },
  ];
  const [usersArray, setUsersArray] = useState(uarray);
  const updateHandler = userId => {
    console.log(userId);
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };
  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children={'All Users'}
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {usersArray.map(user => (
                <Row
                  updateHandler={updateHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={user._id}
                  user={user}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};
export default Users;

function Row({ user, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{user._id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.email}</Td>
      <Td>{user.role}</Td>
      <Td>
        {user.subscription?.status === 'active' ? 'Active' : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => updateHandler(user._id)}
          >
            Change Role
          </Button>

          <Button
            color={'purple.600'}
            onClick={() => deleteButtonHandler(user._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
