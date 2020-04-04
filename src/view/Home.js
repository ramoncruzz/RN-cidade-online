
import React, { useEffect } from 'react';
import { SafeAreaView, Dimensions, ScrollView } from 'react-native';
// import {
//   Card, CardItem, Left, Thumbnail, Body, Text,
// } from 'native-base';
import Card from '../componentes/Card';

const tamanhoTela = Dimensions.get('window').height;
const Home = () => {
  useEffect(() => {

  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <SafeAreaView>
      <ScrollView style={{
        paddingTop: 20, paddingLeft: 5, paddingRight: 5,
      }}
      >
        <Card
          nomeVendedor="Armarinho Fantástico"
          avatarVendedor="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2011%2f08%2f08%2f18%2fWDL-Logo-6098_3511_040844135_499836691.jpg"
          imagem="https://img.kalunga.com.br/FotosdeProdutos/014786z.jpg"
          preco="14.90"
          nome="Barbante"
        />
        <Card
          nomeVendedor="Armarinho Fantástico"
          avatarVendedor="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2011%2f08%2f08%2f18%2fWDL-Logo-6098_3511_040844135_499836691.jpg"
          imagem="https://img.kalunga.com.br/FotosdeProdutos/475808z.jpg"
          preco="22.90"
          nome="Papel sulfite HP Office A4"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
