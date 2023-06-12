import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'

import styleFunctionButton from './styleButton'

export default function Botao({
  pequeno = false,
  invertido = false,
  valor,
  acao,
  estilos,
}) {
  const stylesPattern = styleFunctionButton(pequeno, invertido)
  return (
    <TouchableOpacity onPress={acao} style={[stylesPattern.botao, estilos]}>
      <Text style={[stylesPattern.valor, estilos]}>{valor}</Text>
    </TouchableOpacity>
  )
}
