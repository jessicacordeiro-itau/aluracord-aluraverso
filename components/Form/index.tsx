import { Box, Button, Input, Text, Image, HStack} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Form() {
    
    const [username, setUsername] = React.useState('');
    const router = useRouter();
    
    return (
        <HStack>
        <Box
            as='form'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            w={"xs" ? '100%' : '50%'}
            
        >
            <Text 
                fontSize='25'
                color='#DFFFF4'
                fontWeight='bold'
                letterSpacing='0.2em'
            >
                Boas vindas!
            </Text>
            <Text
                mt='10'
                color='#DFFFF4'
                fontSize='14'
            >
                AluraCord 💙 | AluraVerso
            </Text>

            <Input
                h="50"
                border='0'
                textAlign='center'
                bgColor='#DFFFF4'
                borderRadius='10'
                fontSize='20'
                placeholder="Github UserName"
                mb='10'
                mt='60'
                fontFamily='monospace'
                value={username}
                onChange={(event) => {
                    const valor = event.target.value
                    setUsername(valor)
                }}
            /> 
            <Button
                variant='solid'
                h='48px'
                w='260px' 
                mt='5'
                type='submit'
                border='none'
                bgColor='#452F70'
                borderRadius='10'
                textColor='#DFFFF4'
                fontSize='20'
                fontFamily='monospace'
                fontWeight='bold'
                onClick={(event) => {
                    event.preventDefault();
                    {username.length > 2 ? router.push('/chat') : alert('Usuário inválido digite novamente!')};
                }}
            >
                Entrar
            </Button>
        </Box>
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            maxW='200'
            p='20'
            flex='1'
            minH='240'
        >
            <Image 
                ml='30'
                maxH='200'
                p=' 10'
                borderRadius='50%'
                mb='16'
                src={username.length > 2 ? `https://github.com/${username}.png` : `https://i.imgur.com/vHQ3e42.png`} 
                
            />
            <Text
                textColor='#DFFFF4'
                ml='30'
                fontWeight='bold'
            >
                {username.length > 2 ? `${username}` : '@usuário'}
            </Text>

        </Box>
        </HStack>
    )
}
