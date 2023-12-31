import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import './home.css';
import { Link } from 'react-router-dom';
import courseImg from '../assets/images/courses-image.jpeg';
import introVideo from '../assets/videos/intro-video.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={('center', 'flex-end')}
            spacing={'8'}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              fontSize={'2xl'}
              fontFamily="cursive"
              children="Find Valuable Content At Reasonable Price"
              textAlign={['center', 'left']}
            />
            <Link to="courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'xs'}
            src={courseImg}
            objectFit={'contain'}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          children="OUR BRANDS"
          textAlign={'center'}
          fontFamily={'body'}
          color={'yellow.400'}
        />
        <HStack
          justifyContent={'space-evenly'}
          className="brandsBanner"
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          muted
          autoPlay={true}
          controls
          src={introVideo}
          controlsList="nodownload nofullscreen noremoteplayback"
        ></video>
      </div>
    </section>
  );
};

export default Home;
