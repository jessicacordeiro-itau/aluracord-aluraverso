import React, { useState } from "react";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import appConfig from '../../../config.json'

interface ButtonStickerProps {
    onStickerClick: (sticker: string) => void
}

export default function ButtonSticker({ onStickerClick } : ButtonStickerProps) {
    const [isOpen, setOpenState] = useState(false)

    return (
        <Box
            position='relative'
            zIndex='1'
        >
            <Button
                borderRadius='50'
                position='absolute'
                minW='50'
                minH='50'
                paddingRight='10'
                fontSize='28'
                right='4'
                bottom='-25'
                lineHeight='0'
                display='flex'
                alignItems='center'
                justifyContent='center'
                bgColor= '#DFFFF4'
                border='none'
                cursor='pointer' 
                onClick={() => setOpenState(!isOpen)}
            >
                😝
            </Button>
            {isOpen && (
                <Box
                    display='flex'
                    flexDirection='column'
                    borderRadius='5'
                    position='absolute'
                    bgColor='#A44681'
                    h='400'
                    right='40'
                    bottom='30'
                    padding='16'
                    boxShadow='rgba(4 4 5 0.15) 0 0 0 1, rgba(0 0 0.24) 0 8 16'
                    onClick={() => setOpenState(false)}
                >
                    <Text
                        color='#DFFFF4'
                        fontWeight='bold'
                        fontSize='18'
                        fontFamily='monospace'
                        mb='15'
                    >
                        Stickers
                    </Text>
                    <Box
                        tag='ul'
                        display='flex'
                        flexWrap='wrap'
                        justifyContent='center'
                        flex='1'
                        overflow='auto'
                    >
                        {appConfig.stickers.map((sticker) => (
                            <Text
                                onClick={() => {
                                    if(Boolean(onStickerClick)) {
                                        onStickerClick(sticker)
                                    }
                                }}
                                key={sticker}
                                tag='li'
                                w='50'
                                borderRadius='5'
                                padding='10'
                                _focus={{
                                    bgColor: 'gray'
                                }}
                                _hover={{
                                    bgColor: '#B4759C'
                                }}
                            >
                                <Image maxH='100' src={sticker} alt='stickers' />
                            </Text>
                        ))}
                    </Box>   
                </Box>
            )}
        </Box>
    )
}