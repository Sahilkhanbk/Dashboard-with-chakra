import { HStack, Stack, Text, Icon, Button, Flex, Image, Tab, TabList, Tabs, TabPanel, TabPanels } from '@chakra-ui/react'
import CustomCard from '../../../chakra/CustomCard.jsx'
import { MdArrowOutward } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

const PriceSection = () => {

    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

    return (
        <CustomCard>

            <Flex align="start" justify="space-between">
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Walet Balance</Text>
                    </HStack>

                    <HStack spacing="5"
                        flexDir={{ base: "column", sm: "row" }}
                        align={{ base: "flex-start", sm: "center" }}
                    >
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium"> 22.39401000</Text>
                            <HStack fontWeight="medium" color="green.400">
                                <Icon as={MdArrowOutward} />
                                <Text fontWeight="medium" fontSize="sm"> 22.%</Text>
                            </HStack>
                        </HStack>

                    </HStack>
                </Stack>

                <HStack>
                    <Button leftIcon={<Icon as={FaPlusCircle} />}  >Buy   </Button>
                    <Button leftIcon={<Icon as={FaCircleMinus} />}  >Sell   </Button>
                </HStack>

            </Flex>

            <Tabs variant='soft-rounded' >

                <Flex justify="end" >
                    <TabList bg="black.5" p="3px">
                        {
                            ["1H", "1D", "1W", "1M"].map((tab) => (
                                <Tab _selected={{bg:"white"}} key={tab} fontSize="sm" p="6px" borderRadius="4"> {tab}</Tab>
                            ))
                        }
                    </TabList>
                </Flex>

                <TabPanels>
                    <TabPanel>
                        <Image width="100%" src='/public/graph.svg' mt="3rem" />
                        <HStack justify="space-between">
                            {
                                timestamps.map((timetamp) => (
                                    <Text key={timetamp} fontSize="sm" color="black.80">
                                        {timetamp}
                                    </Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>





        </CustomCard>
    )
}

export default PriceSection
