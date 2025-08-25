import { Flex, HStack, Heading, Menu, MenuButton, MenuList, MenuItem, Button, Icon, Box } from '@chakra-ui/react'
import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";


const TopNav = ({ title,  onOpen}) => {
  return (
    <Box boxShadow="sm" px="4" bg="white">
      <HStack h="16" justify="space-between"  maxW="70rem" mx="auto" >
        <Icon as={FaBarsStaggered} onClick={onOpen} display={{
          base:"block",
          lg:"none"
        }}/>
        <Heading fontSize="28px" fontWeight="medium"  > {title}</Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaRegCircleUser} fontSize="32px" />
          </MenuButton>

          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>

        </Menu>
      </HStack>
    </Box>
  )
}

export default TopNav
