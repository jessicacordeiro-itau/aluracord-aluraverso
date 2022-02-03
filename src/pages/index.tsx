import { Box, HStack, Text, Image, Button, Input } from '@chakra-ui/react'
import React from 'react';
import Form from '../components/Form';

export default function Login() {

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
        w='95%'
        maxW='550'
        borderRadius='10'
        p='32'
        bgColor='#A44681'
        boxShadow='10px 10px 25px #DFFFF4'
      >
      <Form />
      </Box>
    </Box>
  )
}