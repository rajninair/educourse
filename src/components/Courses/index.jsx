import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  StackItem,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import Course from './Course';

const Courses = () => {
  const categoriesArr = [
    'Web development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Structures',
    'Game Development',
  ];
  const [keyword, setKeyword] = useState('');
  const [categories, setCategories] = useState(categoriesArr);

  return (
    <Container minH={'95vh'} maxW="container.lg" padding={'8'}>
      <Heading children={'All Courses'} my="8" />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course.."
        type="text"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categoriesArr.map((category, index) => (
          <Button
            key={index}
            minW={'60'}
            onClick={() => setCategories(category)}
          >
            <Text children={category} />
          </Button>
        ))}
      </HStack>

      <Stack direction={['column', 'row']}>
        <Course
          title={'title'}
          description={
            'desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 '
          }
          views={23}
          imageSrc="https://media.istockphoto.com/id/1413922045/vector/programming-at-home.webp?b=1&s=612x612&w=0&k=20&c=sEne5cRRrR2KAZsgBHV3kBFpvHOim49JLclGuMa_GJY="
          id={'id'}
          creator={'sample1'}
          lectureCount={33}
        />

        <Course
          title={'title'}
          description={
            'desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 '
          }
          views={23}
          imageSrc="https://media.istockphoto.com/id/1413922045/vector/programming-at-home.webp?b=1&s=612x612&w=0&k=20&c=sEne5cRRrR2KAZsgBHV3kBFpvHOim49JLclGuMa_GJY="
          id={'id'}
          creator={'sample1'}
          lectureCount={33}
        />

        <Course
          title={'title'}
          description={
            'desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 '
          }
          views={23}
          imageSrc="https://media.istockphoto.com/id/1413922045/vector/programming-at-home.webp?b=1&s=612x612&w=0&k=20&c=sEne5cRRrR2KAZsgBHV3kBFpvHOim49JLclGuMa_GJY="
          id={'id'}
          creator={'sample1'}
          lectureCount={33}
        />
      </Stack>
    </Container>
  );
};
export default Courses;
