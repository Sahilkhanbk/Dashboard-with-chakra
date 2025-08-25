import React from 'react'
import { HStack, Stack, Icon, Text, Tag, Button } from '@chakra-ui/react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";


const PortfolSection = () => {
    return (
        <HStack bg="white" borderRadius="xl" p="6" justify="space-between"
            flexDir={{ base: "column", xl: "row" }}
            align={{ base: "flex-start", xl: "center" }}
            spacing={{ base: 4, xl: 0 }}
        >

            <HStack
                spacing={{ base: "0", xl: "16px" }}
                flexDir={{ base: "column", xl: "row" }}
                align={{ base: "flex-start", xl: "center" }}

            >
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Total PortFolio Value</Text>
                        <Icon as={IoIosInformationCircleOutline} />
                    </HStack>
                    <Text textStyle="h2" fontWeight="medium"> $ 112,312.24</Text>
                </Stack>

                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Walet Balance</Text>
                    </HStack>
                    
                    <HStack spacing="5"
                        flexDir={{ base: "column", sm: "row" }}
                        align={{ base: "flex-start", sm: "center" }}
                    >
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium"> 22.39401000</Text><Tag colorScheme="gray">BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium"  > ₹ 1,300.00</Text><Tag colorScheme="gray">INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>

            </HStack>

            <HStack>
                <Button leftIcon={<Icon as={FaArrowDownLong} />}  >Deposit   </Button>
                <Button leftIcon={<Icon as={FaArrowUpLong} />}  >Widraw   </Button>
            </HStack>

        </HStack>
    )
}

export default PortfolSection

