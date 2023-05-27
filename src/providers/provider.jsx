'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

// import extendTheme function 

import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand:{
        primary: "purple",
        secondary: "skyblue",
    }
}

export const theme = extendTheme({ colors })


// pass the `theme` prop to the `ChakraProvider`

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}