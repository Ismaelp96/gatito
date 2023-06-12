import { StyleSheet } from 'react-native'
import { cores } from '../../../styles'

export default StyleSheet.create({
  informacao: {
    padding: 24,
  },
  nome: {
    color: cores.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calculo: {
    color: cores.dark,
    fontSize: 14,
    marginVertical: 8,
  },
  preco: {
    color: cores.purple,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.gray,
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: { color: cores.dark, fontSize: 16, marginRight: 8 },
  quantidade: {
    width: 42,
  },
})