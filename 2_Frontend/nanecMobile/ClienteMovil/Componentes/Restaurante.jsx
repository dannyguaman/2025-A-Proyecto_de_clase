// Restaurante.jsx
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Restaurante = ({ restaurante, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemRest} onPress={onPress}>
      <Image source={{ uri: restaurante.imagen }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{restaurante.nombre}</Text>
        <Text>Tipo: {restaurante.tipo}</Text>
        <Text>Dirección: {restaurante.direccion}</Text>
        <Text>Reputación: ⭐ {restaurante.reputacion}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemRest: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  info: {
    padding: 10,
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Restaurante;
