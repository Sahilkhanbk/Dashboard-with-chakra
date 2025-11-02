import { HStack, Stack, Icon, Text, Heading, Box } from '@chakra-ui/react'
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom'
// import Support from '../pages/support/Support';


const SideNav = () => {

    const navLinks = [
        {
            icon: MdOutlineDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: GrTransaction,
            text: "Transaction",
            link: "/transaction"
        },
   

    ];

    return (
        <Stack justify="space-between" boxShadow={{ base: "none", lg: "lg" }} w={{ base: "full", lg: "16rem" }} h="100vh" bg="white">
            <Box >
                <Heading fontSize="21px" as="h1" pt="56px" textAlign="center" color="purple">  @BuckyCode/W</Heading>
                <Box mt="6" mx="12px">
                    {navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.text}>
                            <HStack
                                borderRadius="10px"
                                py="2" px="4"
                                _hover={{ bg: "#f3f3f7", color: "#171717" }}
                                color="#797E82">
                                <Icon as={nav.icon} />
                                <Text fontSize="14px">{nav.text}</Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>

            <Box mt="6" mx="12px" mb="5">
                <Link to="/support">
                    <HStack
                        borderRadius="10px"
                        py="2" px="4"
                        _hover={{ bg: "#f3f3f7", color: "#171717" }}
                        color="#797E82">
                        <Icon as={MdSupportAgent} />
                        <Text fontSize="14px">Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack >
    )
}

export default SideNav






