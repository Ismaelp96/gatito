import React from 'react'
import { TextInput } from 'react-native'
import stylesPattern from './styleCampo'

export default function CampoInteiro({ valor, action, estilos }) {
  const atualiza = (novoValor, actionReturn) => {
    const verificainteiro = novoValor.match(/^[0-9]*$/)
    if (!verificainteiro) return

    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2')

    actionReturn(removeZeroEsquerda)
  }

  const numberString = String(valor)

  return (
    <TextInput
      style={[stylesPattern.campo, estilos]}
      keyboardType='number-pad'
      selectTextOnFocus
      onChangeText={(novoValor) => {
        atualiza(novoValor, action)
      }}
      value={numberString}
    />
  )
}
