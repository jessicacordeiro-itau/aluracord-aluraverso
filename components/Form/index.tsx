import { Box, Button, ButtonGroup, Input, Text } from "@chakra-ui/react";

export default function Form() {
    return (
        <Box
            as="form"
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            w={"xs" ? '100%' : '50%'}
        >
            <Text 
                fontSize='28'
                color='#DFFFF4'
            >
                Boas vindas de volta!
            </Text>
            <Text
                mt='10'
                color='#DFFFF4'
                fontSize='25'
            >
                A l u r a V e r s o
            </Text>

            <Input
                h="50"
                textAlign='center'
                bgColor='#DFFFF4'
                borderRadius='10'
                fontSize='20'
                placeholder="Github UserName"
                mb='10'
                mt='60'
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
            >
                Entrar
            </Button>
        </Box>
    )
}