import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container padding="16" h="90vh">
      <form>
        <Heading
          children="Forget Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button type="submit" w="full" colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default ForgetPassword;
