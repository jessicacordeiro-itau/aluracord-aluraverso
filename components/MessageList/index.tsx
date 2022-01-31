import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { imageConfigDefault } from "next/dist/server/image-config";
import React from "react";
import { NewMessage } from "../../pages/chat";

interface NewProps {
    messages: NewMessage[]
}

export default function MessageList(props: NewProps) {
    const { messages } = props

    return(
            <Box
                tag='ul'
                overflow='auto'
                display='flex'
                flexDirection='column-reverse'
                flex='1'
                color='452F70'
                mb='16'
            >
                {props.messages.map((message) => (
                    <Box
                        key={message.id}
                        tag='li'
                        borderRadius='5'
                        p='5'
                        mb='5'
                    >
                        <HStack>
                            <Image 
                                maxH='35'
                                borderRadius='50%'
                                display='inline-block'
                                mr='8'
                                src={`https://github.com/${message.user}.png`}
                            />
                            <Text 
                                fontSize='18' 
                                textColor='#452F70' 
                                fontWeight='bold'
                            >
                                {message?.user}
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
                    <Text 
                    m='10'

                    >
                        {message?.words}
                    </Text>
                   
                </Box>
                ))}
                
        </Box>
    )
}