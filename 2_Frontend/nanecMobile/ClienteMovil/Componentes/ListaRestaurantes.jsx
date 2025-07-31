// ListaRestaurantes.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Restaurante from './Restaurante';

const SERVER_URL_BASE = 'http://172.31.162.38:8000/';

const ListaRestaurantes = ({ navigation }) => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL_BASE + 'restaurantes/')
      .then(response => {
        setLista(response.data);
      })
      .catch(error => {
        console.error('Error al obtener restaurantes:', error);
      });
  }, []);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Restaurantes:</Text>
      {
        lista.map((itemRestaurante, i) => {
          return (
            <Restaurante
              key={i} 
              restaurante={itemRestaurante}
              onPress={() => navigation.navigate('DetalleRestaurante', { restaurante: itemRestaurante })}
            />
          );
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default ListaRestaurantes;
