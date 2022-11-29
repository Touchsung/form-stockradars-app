import { Flex, Text, Container } from "@chakra-ui/react";

const NavBar = () => {

    return (
        <Container
            className="navBar"
            maxW={"100vw"}
            bg={"utility.white"}
            boxShadow={"lg"}
            centerContent
        >
            <Container maxW='1440px' px='200px'>
                <Flex
                    alignItems="center"
                    height="80px"
                    w={"100%"}
                    justifyContent="space-between"
                >
                    <Flex alignItems={'center'}>
                        <Text color='utility.red' textStyle='h2'>Stock</Text><Text color='gray.950' textStyle={'h2'}>Rader</Text>
                    </Flex>
                    <Flex>

                    </Flex>
                </Flex >
            </Container>
        </Container >
    );
};

export default NavBar;