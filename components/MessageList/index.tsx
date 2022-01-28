import { Box, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";
import { NewMessage } from "../../pages/chat";

interface NewProps {
    messages: NewMessage[];
}

export default function MessageList(props: NewProps) {
    const { messages } = props
    const [username, setUsername] = React.useState('');

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
                {props.messages.map((message)=> {
                    <Text
                    key={message.id}
                        tag='li'
                        borderRadius='5'
                        p='5'
                        mb='5'
                    >
                        <HStack>
                            <Image 
                                w='60'
                                h='60'
                                borderRadius='50%'
                                display='inline-block'
                                mr='8'
                                src={`https://github.com/${username}.png` && `https://i.imgur.com/OoaQEKg.png`}
                            />
                            <Text 
                                fontSize='18' 
                                textColor='#452F70' 
                                fontWeight='bold'
                            >
                                {message.user}
                            </Text>
                            <Text
                                fontSize='10'
                                ml='8'
                                color='#BBBBBB'
                                fontWeight='bold'
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </HStack>
                    {message.words}
                </Text>
                })}
                
        </Box>
    )
}