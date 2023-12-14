import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/App'; // Sesuaikan path dengan struktur folder Anda


const App = () => {
  return (
    
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    
  );
};

export default App;
