import React from 'react'
import { View, Text } from 'react-native'

import styleStatusCarrinho from './styleStatusCarrinho'
import Botao from '../Botao'

export default function StatusCarrinho({ total }) {
  return (
    <View style={styleStatusCarrinho.conteudo}>
      <View style={styleStatusCarrinho.total}>
        <Text style={styleStatusCarrinho.descricao}>Total do carrinho:</Text>
        <Text style={styleStatusCarrinho.valor}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </Text>
      </View>
      <View style={styleStatusCarrinho.botao}>
        <Botao valor='Concluir Pedido' invertido />
      </View>
    </View>
  )
}
