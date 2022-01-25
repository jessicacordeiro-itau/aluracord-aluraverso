import { Box, Image, Text } from "@chakra-ui/react"

export default function PhotoArea() {
    const username = 'jessicacordeiro'
    
    return(
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
                src={`https://github.com/${username}.png`} 
            />
            <Text
                textColor='#DFFFF4'
                ml='30'
            >
                {username}
            </Text>

        </Box>
    )
}
        