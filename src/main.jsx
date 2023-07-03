import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { ChakraProvider } from '@chakra-ui/react'
import { SpeechProvider } from '@speechly/react-client';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>

<ChakraProvider>
  <SpeechProvider
   appId="ba73afa4-fc91-4eee-82cc-f7682fa625ed"
  debug
  logSegments>

    <App />
  </SpeechProvider>
</ChakraProvider>
  </Provider>
  </React.StrictMode>,
)
