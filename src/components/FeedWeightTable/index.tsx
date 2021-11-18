import React from 'react';
import { Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import theme from '../../styles/theme';
import { styles } from './styles';

export function FeedWeightTable() {
  const columns = ['Peso do Pet', 'Quantidade de comida por dia'];

  const rows = [
    ['Até 3kg', '200g'],
    ['3 a 5kg', '250g'],
    ['6 a 7kg', '300g'],
    ['8 a 10kg', '350g'],
    ['11 a 15kg', '550g'],
    ['16 a 20kg', '700g'],
    ['21 a 25kg', '950g'],
    ['26 a 30kg', '1kg'],
    ['31 a 35kg', '1.2kg'],
    ['36 a 40kg', '1.3kg'],
    ['+41kg', '1.5kg ou mais'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Para saber quanto seu pet vai precisar comer é simples, basta seguir a
        tabela abaixo e dividir a quantidade de comida do dia em 2 ou 3
        refeições.
      </Text>

      <Table borderStyle={{ borderWidth: 2, borderColor: theme.colors.shape }}>
        <Row data={columns} style={styles.head} textStyle={styles.text} />
        <Rows data={rows} textStyle={styles.text} />
      </Table>
    </View>
  );
}
