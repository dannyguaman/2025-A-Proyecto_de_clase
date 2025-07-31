// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaRestaurantes from './Componentes/ListaRestaurantes';
import DetalleRestaurante from './Componentes/DetalleRestaurante';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ListaRestaurantes" 
          component={ListaRestaurantes} 
          options={{ title: 'Restaurantes' }} 
        />
        <Stack.Screen 
          name="DetalleRestaurante" 
          component={DetalleRestaurante} 
          options={{ title: 'Detalle Restaurante' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
