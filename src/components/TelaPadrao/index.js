import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

import stylesGlobal, { cores } from '../../styles'
import stylesTela from './stylesTela'

export default function TelaPadrao({ children }) {
  return (
    <>
      <SafeAreaView style={stylesTela.ajusteTela}>
        <StatusBar backgroundColor={cores.purple} />
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={stylesGlobal.preencher}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={stylesTela.ajusteTelaBaixo} />
    </>
  )
}
