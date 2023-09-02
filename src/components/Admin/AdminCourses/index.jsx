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
  useDisclosure,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.jpeg';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useState } from 'react';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const carray = [
    {
      _id: 'course1',
      title: 'React course',
      category: 'Web Development',
      poster: {
        url: 'https://media.istockphoto.com/id/1413922045/vector/programming-at-home.webp?b=1&s=612x612&w=0&k=20&c=sEne5cRRrR2KAZsgBHV3kBFpvHOim49JLclGuMa_GJY=',
      },
      createdBy: 'rajni@gmail.com',
      views: 123,
      numOfvideos: 12,
    },
    {
      _id: 'course2',
      title: 'Nodejs course',
      category: 'Backend Development',
      poster: {
        url: 'https://media.istockphoto.com/id/1413922045/vector/programming-at-home.webp?b=1&s=612x612&w=0&k=20&c=sEne5cRRrR2KAZsgBHV3kBFpvHOim49JLclGuMa_GJY=',
      },
      createdBy: 'rajni2@gmail.com',
      views: 150,
      numOfvideos: 15,
    },
  ];
  const [coursesArray, setCoursesArray] = useState(carray);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = courseId => {
    console.log(courseId);
    onOpen();
  };
  const deleteButtonHandler = courseId => {
    console.log(courseId);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId, lectureId);
  };
  const addLectureHandler = (e, courseId, title, description, video) => {
    console.log('Add Lecture');
    e.preventDefault();
  };

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '1fr', '8fr 1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children={'All Courses'}
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {coursesArray.map(course => (
                <Row
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={course._id}
                  course={course}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'someid'}
          courseTitle={'Some title React Course'}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};
export default AdminCourses;

function Row({ course, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{course._id}</Td>
      <Td>
        <Image src={course.poster.url} alt="course" />
      </Td>
      <Td>{course.title}</Td>
      <Td textTransform={'uppercase'}>{course.category}</Td>
      <Td>{course.createdBy}</Td>
      <Td isNumeric>{course.views}</Td>
      <Td isNumeric>{course.numOfvideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => courseDetailsHandler(course._id)}
          >
            View Lectures
          </Button>

          <Button
            color={'purple.600'}
            onClick={() => deleteButtonHandler(course._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
