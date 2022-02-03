import React from "react";
import { Box, Text, Image, HStack, propNames } from "@chakra-ui/react";
import { NewMessage } from "../../pages/chat";

interface MessageListProps {
    messages: NewMessage[]
}

export default function MessageList({ messages } : MessageListProps) {

    return(
            <Box
                tag='ul'
                overflow='auto'
                display='flex'
                flexDirection='column-reverse'
                flex='1'
                color='#452F70'
                mb='16'
            >
                {messages.map((message) => (
                    <Box
                        key={message.id}
                        tag='li'
                        borderRadius='5'
                        padding='5'
                        mb='12'
                        _hover={{
                            bgColor: '#D6EFE6'
                        }}
                    >
                        <HStack m='10'>
                            <Image 
                                maxH='35'
                                borderRadius='50%'
                                display='inline-block'
                                mr='5'
                                src={`https://github.com/${message.user}.png`}
                                alt='user'
                            />
                            <Text 
                                fontSize='18' 
                                textColor='#452F70' 
                                fontWeight='bold'
                            >
                                {message.user}
                            </Text>
                            <Text
                                fontSize='12'
                                ml='8'
                                color='#BBBBBB'
                                fontWeight='bold'
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </HStack>

                        {/*
                        
                        // tentando colocar o icone de deletar uma mensagem

                        <CloseIcon
                            as='button'
                            onClick={() => ''}
                            color='#A44681'
                            w='15'
                            h='15'
                            cursor='pointer'
                            bottom='50'
                            position='relative'
                            left='98.5%'

                        />
                        */}

                        {message.words.startsWith(':sticker:') ? (
                            <Image maxH='200' src={message.words.replace(':sticker: ', '')} alt='sticker' />
                        ) : (
                            <Text m='10'>
                                {message.words}
                            </Text>
                        )}
                    </Box>
                ))}
                
        </Box>
    )
}