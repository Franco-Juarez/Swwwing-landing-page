import { Heading, VStack, Text, Button, HStack, Image, Box } from "@chakra-ui/react"

const WorkSection = () => {
  return (
    <VStack p={4} bg={"yellow.200"}>
      <HStack py={2}>
        <Image
        w={"50%"} 
        src="https://picsum.photos/id/237/200/300"
        />
      <VStack alignItems={"flex-start"}>
        <Heading>Título</Heading>
        <Text>Descripción del trabajo</Text>
        <Button bg={"blue.900"} color={"whiteAlpha.900"}>CALL TO</Button>
      </VStack>
      </HStack>
      <HStack py={2}>
      <VStack alignItems={"flex-end"}>
        <Heading>Título</Heading>
        <Text textAlign={"right"}>Descripción del trabajo</Text>
        <Button bg={"blue.900"} color={"whiteAlpha.900"}>CALL TO</Button>
      </VStack>
      <Image
        w={"50%"} 
        src="https://picsum.photos/id/237/200/300"
        />
      </HStack>
      <HStack py={2}>
        <Image
        w={"50%"}  
        src="https://picsum.photos/id/237/200/300"
        />
      <VStack pb={4} alignItems={"flex-start"}>
        <Heading>Título</Heading>
        <Text>Descripción del trabajo</Text>
        <Button bg={"blue.900"} color={"whiteAlpha.900"}>CALL TO</Button>
      </VStack>
      </HStack>
      <Box pt={4}>
        <Button bg={"blue.900"} color={"whiteAlpha.900"}>Ver más</Button>
      </Box>
    </VStack>
  )
}

export default WorkSection;