import {Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { FaCartShopping } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
//import { useProductStore } from '../store/product';

const Navbar = () => {
  const {colorMode , toggleColorMode} = useColorMode();
  //const { products } =useProductStore()


  return ( 
    <Container maxW={"1140px"} px={4}>
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row",
      }}
    >

    <Text
          fontSize={{ base: 22, sm: 28 }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          style={{
            background: "linear-gradient(to right, #00bcd4, #2196f3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
                    <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            Product Store 🛒 <FaCartShopping />
          </Link>
        </Text> 

            <HStack spacing={2} alignItems={"center"}>
             <Link to={"/create"}>
             <Button mr="4px">
              <PlusSquareIcon fontSize={20}/>
             </Button>
             </Link>
             <Button onClick={toggleColorMode}>
               {colorMode === "light" ? <IoMoon/> : <LuSun size="20"/>}
             </Button>
            </HStack>
    
    </Flex>
    </Container>
  );
};

export default Navbar ;
