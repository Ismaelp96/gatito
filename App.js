import React from 'react'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import Reactotron, { asyncStorage } from 'reactotron-react-native'

import Rotas from './src/Rotas'
import TelaPadrao from './src/components/TelaPadrao'

Reactotron.configure().useReactNative().connect()

export default function App() {
  Reactotron.log('a')
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  )
}
