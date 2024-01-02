import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'; // Sesuaikan path dengan struktur folder Anda
import { TouchableOpacity, Text, View, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sesuaikan dengan library atau sumber ikon yang digunakan

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOkPress = () => {
    // Lakukan sesuatu dengan nama yang diinput
    console.log('Name:', name);
    // Tutup modal
    setModalVisible(false);
    // Lakukan tindakan lain sesuai kebutuhan Anda
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        tabBar={() => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60, borderRadius: 90 }}>
            <TouchableOpacity onPress={handleButtonPress}>
              <View style={{ alignItems: 'center' }}>
                <Icon name="plus" size={30} color="blue" />
                <Text style={{ fontSize: 16 }}>Add</Text>
              </View>
            </TouchableOpacity>
            {/* Tambahkan lebih banyak TouchableOpacity di sini jika perlu */}
          </View>
        )}
      >
        <Tab.Screen
          name="PlantIQue"
          component={Home}
          options={{
            tabBarLabel: 'ADD',
          }}
        />
        {/* Tambahkan lebih banyak Tab.Screen di sini sesuai kebutuhan Anda */}
      </Tab.Navigator>
      <Modal visible={modalVisible} animationType="faden" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', height: '19%' }}>
            <Text>Input New Device Name:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <TouchableOpacity style={{ width: 120, height: 40, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} onPress={handleOkPress}>
                <Text style={{ color: 'white' }}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 120, height: 40, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} onPress={closeModal}>
                <Text style={{ color: 'white' }}>Close</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>


    </View>
  );
};

export default AppNavigation;
