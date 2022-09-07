
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

import { ChakraProvider } from '@chakra-ui/react';
import Prototype from './Prototype';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Prototype />
    </ChakraProvider>
  </React.StrictMode>
  )