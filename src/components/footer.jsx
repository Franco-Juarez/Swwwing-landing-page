import { Link, VStack, Text, Image, Flex } from "@chakra-ui/react"
import logo from "../images/logo.svg"

const Footer = () => {
return (
  <VStack p={4} color={"blue.900"} bg={"white"}>
    <Text>swwwing.ar@gmail.com</Text>
    <Text>291 563 2895</Text>
    <Flex>
      <Link href="https://www.youtube.com" target={"_blank"}>Link</Link>
      <Link href="https://www.youtube.com" target={"_blank"}>Link</Link>
      <Link href="https://www.youtube.com" target={"_blank"}>Link</Link>
    </Flex>
    <Image
    w={"30%"}
    src={logo}/>
    <Text>Designed by <Link href="https://www.youtube.com" target={"_blank"}>Swwwing Agency</Link></Text>
  </VStack>
)
}

export default Footer; 