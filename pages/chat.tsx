import { Box, Button, HStack, Input} from "@chakra-ui/react"
import React from "react"
import Header from "../components/Header"
import MessageList from "../components/MessageList"

export interface NewMessage {
    id: number
    user: string
    words: string
}

export default function Chat({id, user}: NewMessage) {
    const [message, setMessage] = React.useState<string>('')
    const [messageList, setMessageList] = React.useState<NewMessage[]>([])

    const handleNewMessage = () => {
        setMessageList([
            {id:messageList.length +1, user:'jessicacordeiro', words:message},
            ...messageList,
            
        ]) 
        setMessage('')
    }

    return(
        <Box 
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                display='flex'
                flexDirection='column'
                flex='1'
                boxShadow='0 2 10 0 rgb(0 0 0 / 20%)'
                borderRadius='5'
                bgColor='#A44681'
                h='100%'
                maxW='95%'
                maxH='95vh'
                p='32'
            >
            <Header />
            <Box
                position='relative'
                display='flex'
                flex='1'
                h='80%'
                bgColor='#DFFFF4'
                flexDirection='column'
                borderRadius='5'
                p='16'
            >
                <MessageList messages={messageList}/>
            </Box>
            <HStack>
                <Box
                    as='form'
                    display='flex'
                    alignItems='center'
                    w='100%'
                    
                >
                    <Input 
                        placeholder="Insira sua mensagem aqui"
                        w='100%'
                        border='0'
                        resize='none'
                        borderRadius='5'
                        bgColor='#DFFFF4'
                        color='#452F70'
                        mr='12'
                        h="50"
                        fontSize='20'
                        mb='10'
                        mt='10'
                        p='10'
                        fontFamily='monospace'
                        value={message}
                        onChange={(event) => {
                            const valor = event.target.value
                            setMessage(valor)
                        }}
                        onKeyPress={(event) => {
                            if(event.key === 'Enter') {
                                event.preventDefault()
                                handleNewMessage()
                            }
                        }}
                    />
                    <Button 
                        variant='solid'
                        h='52px'
                        w='100px' 
                        mt='5'
                        type='submit'
                        border='none'
                        bgColor='#452F70'
                        borderRadius='10'
                        textColor='#DFFFF4'
                        fontSize='18'
                        fontWeight='bold'
                        fontFamily='monospace'
                        value={message}
                        onClick={(event) => {
                            event.preventDefault()
                            handleNewMessage()
                        }}
                    >
                        Enviar
                    </Button>
                    </Box>
                </HStack>  
            </Box>
        </Box>   
    )
}