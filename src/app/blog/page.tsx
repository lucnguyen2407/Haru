import Footer from '@/components/footer/footer';
import NavBar from '@/components/header/navBar';
import { Text } from '@chakra-ui/react';

const Page = () => {
  return (
    <>
      <NavBar />
      <Text>This is Blog Page</Text>
      <Footer />
    </>
  );
};

export default Page;
