import React from 'react';
import { Image, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
  Card, CardItem, Left, Thumbnail, Body, Text,
} from 'native-base';

const ItemCard = ({
  avatarVendedor, nomeVendedor, preco, imagem, nome, descricao, produtoID, vendedorID,
}) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <TouchableOpacity onPress={() => { Alert.alert('pressionado'); }}>
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: avatarVendedor }} />
          <Text style={{ fontSize: 23, fontWeight: '500' }}>{nomeVendedor}</Text>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: imagem }} style={{ flex: 1, height: 200, resizeMode: 'contain' }} />
      </CardItem>
      <CardItem cardBody>
        <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>{nome}</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            <Text style={{ fontSize: 15, fontWeight: '100' }}>R$</Text>

            {' '}
            {String(preco).split('.')[0]}
            <Text style={{ fontSize: 15, fontWeight: '100' }}>
              ,
              {String(preco).split('.')[1]}
            </Text>
          </Text>
        </Body>
      </CardItem>
    </Card>
  </TouchableOpacity>
);
ItemCard.propTypes = {
  avatarVendedor: PropTypes.string.isRequired,
  nomeVendedor: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  produtoID: PropTypes.string.isRequired,
  vendedorID: PropTypes.string.isRequired,
};
export default ItemCard;
