import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import TypingTitle from "./TypingTitle";

function HeroSection() {
  return (
    <Flex
      direction={"row"}
      height="50vh"
      width="100vw"
      margin="0 auto"
    >
      <Box
        width={{ base: "50%", md: "50%" }}
        height={{ base: "100%", md: "100%" }}
        display="flex"
        pt={8}
        px={4}
        flexDirection={"column"}
        alignItems="flex-start"
        justifyContent="center"
        color={"whiteAlpha.900"} 
        bg={"blue.900"}
      >
        <TypingTitle />
        <Text>Lorem ipsum dolor sit amet consectetur</Text>
        <Button bg={"whiteAlpha.900"} color={"blue.900"} w={"100%"}>CALL</Button>
      </Box>
      <Box
        width={{ base: "50%", md: "50%" }}
        height={{ base: "100%", md: "100%" }}
        backgroundImage={`https://picsum.photos/id/1/600/800`}
        backgroundSize="cover"
        backgroundPosition="center"
      />
    </Flex>
  );
}

export default HeroSection;
