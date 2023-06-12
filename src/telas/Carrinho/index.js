import React from 'react'
import { FlatList } from 'react-native'

import Item from './item'
import StatusCarrinho from '../../components/StatusCarrinho'

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao:
      'Não de banho no seu gato! Mas se precisar a gente deixa ele cheirosinho',
    quantidade: 1,
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 99.9,
    descricao: 'Uma dose da vacina V4. Seu gato precisa',
    quantidade: 2,
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.9,
    descricao: 'Uma dose da vacina antirrábica. É necessária uma vez ao ano',
    quantidade: 1,
  },
]

export default function Carrinho() {
  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  )
  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        removeClippedSubviews={false}
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )
}
