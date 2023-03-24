import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import { App } from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  , rootElement)
