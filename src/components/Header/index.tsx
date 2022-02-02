import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    
    return(
        <Box 
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            w='100%'
            mb='16'
            
        >
            <Text 
                textColor='#DFFFF4'
                fontSize='24'
                fontWeight='bold'
            >
                Chat - AluraVerso
            </Text>
            <Button
               variant='solid'
               h='48px'
               w='250px' 
               mt='5'
               type='submit'
               border='none'
               bgColor='#452F70'
               borderRadius='10'
               textColor='#DFFFF4'
               fontSize='20'
               fontWeight='bold'
               fontFamily='monospace'
               onClick={() =>{
                    router.push('/')
               }}
            >
                Logout
            </Button>       
        </Box>
    )
}