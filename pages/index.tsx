import { Box, HStack, Text } from '@chakra-ui/react'
import Form from '../components/Form'
import PhotoArea from '../components/PhotoArea'

export default function Login() {
  const username = 'jessicacordeiro'

  return (
    <Box 
      display='flex' 
      alignItems='center'
      justifyContent='center'
    >
      <Box 
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        flexDirection={"xs" ? 'column' : 'row'}
        w='100%'
        maxW='600'
        borderRadius='10'
        p='32'
        m='16'
        bgColor='#A44681'
      >
        <HStack>
          <Form /> 
          <PhotoArea />
        </HStack>
      </Box>
    </Box>
  )
}