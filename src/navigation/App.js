import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home'; // Sesuaikan path dengan struktur folder Anda

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffff', // Ubah menjadi warna hijau
        },
        headerTintColor: 'black', // Warna teks header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ 
          title: 'PlantIQue',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
