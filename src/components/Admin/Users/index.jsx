import { Box, Grid, Image } from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.jpeg';
import Sidebar from '../Sidebar';
const Users = () => {
  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box></Box>
      <Sidebar />
    </Grid>
  );
};
export default Users;
