import React, { useState } from 'react'
import { Text, View } from 'react-native'

import style from './style'
import CampoInteiro from '../../../components/CampoInteiro'
import Botao from '../../../components/Botao'

export default function Item({
  nome,
  preco,
  descricao,
  quantidade: quantidadeIncial,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeIncial)
  const [total, setTotal] = useState(preco * quantidadeIncial)

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco)
  }

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade)
    calculaTotal(novaQuantidade)
  }

  return (
    <>
      <View style={style.informacao}>
        <Text style={style.nome}>{nome}</Text>
        <Text style={style.descricao}>{descricao}</Text>
        <Text style={style.preco}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(preco)}
        </Text>
      </View>
      <View style={style.carrinho}>
        <View>
          <View style={style.valor}>
            <Text style={style.descricao}>Quantidade:</Text>
            <CampoInteiro
              valor={quantidade}
              action={atualizaQuantidadeTotal}
              estilos={style.quantidade}
            />
          </View>
          <View style={style.valor}>
            <Text style={style.descricao}>Total:</Text>
            <Text style={style.preco}>
              {Intl.NumberFormat('pt-Br', {
                style: 'currency',
                currency: 'BRL',
              }).format(total)}
            </Text>
          </View>
        </View>
        <Botao valor='Remover do Carrinho' acao={() => {}} />
      </View>
      <View style={style.divisor} />
    </>
  )
}
