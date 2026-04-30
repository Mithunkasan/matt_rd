import { Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaClipboardList } from 'react-icons/fa'

const GridCard = ({color="#ecc94b",text,supportText,RAJESH="BLACK",SIVA="#ecc94b", icon = FaClipboardList}) => {
  return (
    <VStack bg={color} p={6} borderRadius="md" boxShadow="md" align="center">
          <Icon as={icon} boxSize={10} color={SIVA} />
          <Text fontSize="lg" fontWeight="semibold" color={RAJESH}>
         {text}
          </Text>
          <Text fontSize="sm" color={RAJESH} >    {supportText}</Text>
        </VStack>
  )
}
 
export default GridCard
