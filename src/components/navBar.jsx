  import {
    Box, 
    Image,
    HStack,
    Stack,

  } from "@chakra-ui/react";

import logo from "../images/logo.svg"
import MenuResponsive from "./menuResponsive";



const Navbar = () => {

  return (
    <Stack as={"nav"} alignItems={"center"} position={"sticky"} top={0} zIndex={"sticky"} py={{ base: 2, md: 4}} px={4} bg={"#FFF"}>
      <HStack w={{base:"100%", md:"75%"}} justify={"space-between"}>
        <Box w={{base: "25%", sm: "10%", lg: "8%"}} as="a" href="index.html">
          <Image w={"100%"} src={logo} alt='logo' />
        </Box>
        <MenuResponsive />
      </HStack>
    </Stack>
  )
}

export default Navbar;