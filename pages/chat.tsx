import { Box, Button, HStack, Input} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import MessageList from "../components/MessageList"
import { createClient, SupabaseClient } from "@supabase/supabase-js"
import { v4 as uuidv4 } from 'uuid'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzYwNDY0MywiZXhwIjoxOTU5MTgwNjQzfQ.9XYOa_h6KfLfCqIxvKIM5E49H4pzvHSK84W98JE4Rao'
const SUPABASE_URL = 'https://kdjaewmnhutebpeykipj.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export interface NewMessage {
    id: string
    user: string
    words: string
}

export default function Chat({user}: NewMessage) {
    const [message, setMessage] = useState<string>('')
    const [messageList, setMessageList] = useState<NewMessage[]>([])
    const id = uuidv4()

    useEffect(() => {
        async function findAll() {
            const { data } = await supabaseClient
                .from<NewMessage>('messages')
                .select('*')
                .order('id', {ascending: true})

            setMessageList(data as NewMessage[])
        }

        findAll();
    }, [])

    async function handleNewMessage() {
        const texts: NewMessage = {
            id,  user:'jessicacordeiro', words:message
        } 
        
        await supabaseClient
            .from<NewMessage>('messages')
            .insert([
                texts
            ])

        setMessageList([
            texts,
            ...messageList                    
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
                        fontSize='16'
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