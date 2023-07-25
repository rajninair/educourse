import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import introVideo from '../../assets/videos/intro-video.mp4';
import { useState } from 'react';
const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'aaa',
      title: 'sample title 1',
      description: 'sample description 1',
      video: {
        url: 'dffddf',
      },
    },
    {
      _id: 'bbb',
      title: 'sample title 2',
      description: 'sample description 2',
      video: {
        url: 'dffddf',
      },
    },
    {
      _id: 'ccc',
      title: 'sample title 3',
      description: 'sample description 3',
      video: {
        url: 'dffddf',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          muted
          autoPlay={true}
          controls
          src={introVideo}
          controlsList="nodownload noremoteplayback"
        ></video>
        <Heading
          size={'lg'}
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading size={'md'} mx="4" children="Description" />
        <Text m="4" children={`${lectures[lectureNumber].description}`} />
      </Box>

      <VStack>
        {lectures.map((lecture, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={lecture._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {lecture.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};
export default CoursePage;
