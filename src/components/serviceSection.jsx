import { VStack, Text, Heading, Image, Button, Flex } from "@chakra-ui/react";
import designPhoto from "../images/design.svg";
import developmentPhoto from "../images/development.svg";
import identityPhoto from "../images/identity.svg";


const ServiceSection = () => {
  return (
    <VStack alignItems={"center"} p={4} as="section">
      <Flex p={4} flexDirection={"column"} alignItems={"center"}>
        <Image
        w={"50%"}
        src={developmentPhoto}
        />
        <Heading pt={4} textAlign={"center"}>
          Título de la tarjeta. 
        </Heading>
        <Text p={2} textAlign={"center"}>
          Somos una agencia de desarrollo web especializada.
        </Text>
        <Button color={"whiteAlpha.900"} bg={"blue.900"}>
          CALL TO ACTION
        </Button>
      </Flex>
      <Flex p={4} flexDirection={"column"} alignItems={"center"}>
        <Image
        w={"50%"}
        src={identityPhoto}
        />
        <Heading pt={4} textAlign={"center"}>
          Título de la tarjeta. 
        </Heading>
        <Text p={2} textAlign={"center"}>
          Somos una agencia de desarrollo web especializada.
        </Text>
        <Button color={"whiteAlpha.900"} bg={"blue.900"}>
          CALL TO ACTION
        </Button>
      </Flex>
      <Flex p={4} flexDirection={"column"} alignItems={"center"}>
        <Image
        w={"50%"}
        src={designPhoto}
        />
        <Heading pt={4} textAlign={"center"}>
          Título de la tarjeta. 
        </Heading>
        <Text p={2} textAlign={"center"}>
          Somos una agencia de desarrollo web especializada.
        </Text>
        <Button color={"whiteAlpha.900"} bg={"blue.900"}>
          CALL TO ACTION
        </Button>
      </Flex>
    </VStack>
  )
}

export default ServiceSection;