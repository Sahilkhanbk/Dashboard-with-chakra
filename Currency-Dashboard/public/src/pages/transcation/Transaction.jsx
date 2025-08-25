import {
    Card, Flex, Button, Icon, Tab, Tabs,
    TabList, Tag, TabIndicator, TabPanel,
    TabPanels, InputGroup, InputLeftElement, Input, HStack
} from '@chakra-ui/react'
import { IoSearchOutline } from "react-icons/io5";


import { DashboardLay } from '../../componrnts/DashboardLay.jsx'
import { FaDownload } from "react-icons/fa6";
import TransTable from './Components/TransTable.jsx';
const Transaction = () => {

    const tabs = [
        {
            name: "All",
            count: "349",
        },
        {
            name: "Deposit",
            count: "114",
        },
        {
            name: "Withdrawal",
            count: "55",
        },
        {
            name: "Trade",
            count: "50",
        },
    ]

    return (
        <DashboardLay title="Transactions">
            <Flex justify="end" mt="6" mb="3">
                <Button leftIcon={<Icon as={FaDownload} />}>Export Env</Button>
            </Flex>
            <Card borderRadius="16px">
                <Tabs position='relative' variant='unstyled'>
                    <TabList pt="4" display="flex" w="full" justifyContent="space-between">
                        <HStack>
                            {
                                tabs.map((tab) => (
                                    <Tab key={tab.name} display="flex" gap="2"  pb="4">
                                        {tab.name}  <Tag colorScheme='gray' borderRadius="full">  {tab.count}</Tag>
                                    </Tab>
                                ))
                            }

                        </HStack>
                        <InputGroup maxW="200px"  pr="6">
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={IoSearchOutline} />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Search.........' />
                        </InputGroup>

                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                    <TabPanels>

                        <TabPanel>
                            <TransTable />
                        </TabPanel>

                        <TabPanel>
                            <p>Drifting Moon also good novel !</p>
                        </TabPanel>

                        <TabPanel>
                            <TransTable />
                        </TabPanel>

                        <TabPanel>
                            <p>You Bastard i watched the novel its name was the returner magic should be special  !</p>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </Card>
        </DashboardLay>
    )
}

export default Transaction
