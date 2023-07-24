import {
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({
  title,
  description,
  views,
  imageSrc,
  id,
  creator,
  lectureCount,
}) => {
  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text children={description} noOfLines={2} />

      <HStack>
        <Text
          children={'Creator : '}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text
          children={creator}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
      />

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Views - ${lectureCount}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};
export default Course;
