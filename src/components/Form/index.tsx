import { Box, Button, Input, Text, Image, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Form() {
    const router = useRouter();
    const [username, setUsername] = React.useState('');
    
    return (
        <HStack>
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            w='100%' 
            mt='30'   
            mr='10'   
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
                mb='40'
            >
                AluraCord 💙 | AluraVerso
            </Text>

            <Input
                mt='30'
                h='50'
                size='lg'
                border='0'
                textAlign='center'
                bgColor='#DFFFF4'
                borderRadius='50'
                fontSize='20'
                placeholder="user do github"
                mb='10'
                fontFamily='monospace'
                
                value={username}
                onChange={(event) => {
                    const valor = event.target.value
                    setUsername(valor)
                }}
            /> 
            <Button
                h='48px'
                w='260px' 
                mt='5'
                type='submit'
                border='none'
                bgColor='transparent'
                borderRadius='10'
                textColor='#DFFFF4'
                fontSize='20'
                fontFamily='monospace'
                fontWeight='bold'
                cursor='pointer'
                _hover={{
                    bgColor: '#452F70',
                }}
                onClick={(event) => {
                    event.preventDefault();
                    {username.length > 2 ? router.push(`/chat?username=${username}`) : alert('Usuário inválido digite novamente!')};
                }}
            >
                entrar
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
            mt='20'
        >
            <Image 
                maxH='200'
                borderRadius='50%'
                mb='20'
                src={username.length > 2 ? `https://github.com/${username}.png` : `https://i.imgur.com/vHQ3e42.png`}
                alt='user' 
                
            />
            <Text
                textColor='#DFFFF4'
                fontWeight='bold'
            >
                {username.length > 2 ? `${username}` : '@usuário'}
            </Text>

        </Box>
        </HStack>
    )
}
