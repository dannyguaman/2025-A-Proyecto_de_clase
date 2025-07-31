// DetalleRestaurante.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

const DetalleRestaurante = ({ route }) => {
  const { restaurante } = route.params;

  const [nombre, setNombre] = useState(restaurante.nombre);
  const [tipo, setTipo] = useState(restaurante.tipo);
  const [direccion, setDireccion] = useState(restaurante.direccion);
  const [reputacion, setReputacion] = useState(restaurante.reputacion);
  const [imagen, setImagen] = useState(restaurante.imagen);

  const guardarCambios = () => {
    console.log('Datos actualizados:', { nombre, tipo, direccion, reputacion, imagen });
    alert('Cambios guardados (Ojo, solo local, falta llamar al endpoint para actualizar en el servidor)');
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput value={nombre} onChangeText={setNombre} style={styles.input} />

      <Text>Tipo:</Text>
      <TextInput value={tipo} onChangeText={setTipo} style={styles.input} />

      <Text>Dirección:</Text>
      <TextInput value={direccion} onChangeText={setDireccion} style={styles.input} />

      <Text>Reputación:</Text>
      <TextInput
        value={String(reputacion)}
        onChangeText={setReputacion}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text>Imagen (URL):</Text>
      <TextInput value={imagen} onChangeText={setImagen} style={styles.input} />

      <Image source={{ uri: imagen }} style={styles.imageDetalle} />

      <Button title="Guardar Cambios" onPress={guardarCambios} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  imageDetalle: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});

export default DetalleRestaurante;
