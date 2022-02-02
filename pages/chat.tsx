import { Box, Button, HStack, Input } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import MessageList from "../components/MessageList"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import ButtonSticker from "../components/ButtonSticker"

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2MDc0OSwiZXhwIjoxOTU5MjM2NzQ5fQ.eX_4YvPoxnTb-dBwFmIH-Ug_3oT4-K7qL4gsSb6CIus'
const SUPABASE_URL = 'https://bucvlkylcznnntccgzfu.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


export interface NewMessage {
    id: number
    words: string
    user: string
}

export default function Chat() {
    const router = useRouter();
    const user = router.query.username

    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState<NewMessage[]>([])

    async function getMessages() {
        const supabaseData = await supabaseClient
            .from('messages')
            .select('*')
            .order('id', {ascending: false})

        setMessageList(supabaseData.data as NewMessage[])    
    }


    async function messagesRealTime(addMessage: (message: NewMessage) => void) {
        supabaseClient
            .from('messages')
            .on('INSERT', (response) => {
                addMessage(response.new as NewMessage)
            })
            .subscribe()
    }

    useEffect(() => {
        getMessages()
        messagesRealTime((message) => {
            setMessageList((currentListMessages) => {
                return [message, ...currentListMessages]
            })
        })
       
    }, [])

    async function handleNewMessage(newWords: string) {
        const response = await supabaseClient
            .from('messages')
            .insert([
                {user, words: newWords}
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
                maxW='90%'
                maxH='90vh'
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
                            setMessage(event.target.value)
                        }}
                        onKeyPress={(event) => {
                            if(event.key === 'Enter') {
                                event.preventDefault()
                                handleNewMessage(message)
                            }
                        }}
                    />
                    <ButtonSticker 
                        onStickerClick={(sticker) => {
                            console.log('foi porra', sticker)
                            handleNewMessage(`:sticker: ${sticker}`)
                        }}
                    />
                    <Button 
                        variant='solid'
                        h='52'
                        w='100'
                        mt='5'
                        padding='10'
                        type='submit'
                        border='none'
                        bgColor='#452F70'
                        borderRadius='10'
                        textColor='#DFFFF4'
                        fontSize='20'
                        fontWeight='bold'
                        fontFamily='monospace'
                        value={message}
                        onClick={(event) => {
                            event.preventDefault()
                            handleNewMessage(message)
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