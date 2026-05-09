import { Icon, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaClipboardList } from 'react-icons/fa'

const GridCard = ({color="#ecc94b",text,supportText,RAJESH="BLACK",SIVA="#ecc94b", icon = FaClipboardList}) => {
  const themeTextColor = useColorModeValue("black", "white");
  const finalTextColor = RAJESH === "BLACK" ? themeTextColor : RAJESH;

  return (
    <VStack bg={color} p={6} borderRadius="md" boxShadow="md" align="center">
          <Icon as={icon} boxSize={10} color={SIVA} />
          <Text fontSize="lg" fontWeight="semibold" color={finalTextColor}>
         {text}
          </Text>
          <Text fontSize="sm" color={finalTextColor} >    {supportText}</Text>
        </VStack>
  )
}
 
export default GridCard
