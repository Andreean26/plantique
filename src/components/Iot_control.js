import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const IoTControl = () => {
  const [deviceState, setDeviceState] = useState(false);
  const [secondDeviceState, setSecondDeviceState] = useState(false);

  const toggleDevice = () => {
    setDeviceState(!deviceState);
    console.log(`Perangkat 1 sekarang: ${deviceState ? 'Active' : 'Nonactive'}`);
  };

  const toggleSecondDevice = () => {
    setSecondDeviceState(!secondDeviceState);
    console.log(`Perangkat 2 sekarang: ${secondDeviceState ? 'Active' : 'Nonactive'}`);
  };

  return (
    <View style={styles.container}>
    <View style={styles.deviceContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: deviceState ? 'green' : 'red' }]}
        onPress={toggleDevice}
      >
        <Text style={styles.buttonText}>{deviceState ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
      <Text style={styles.buttonName}>Device 1</Text>
    </View>

    <View style={styles.deviceContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: secondDeviceState ? 'green' : 'red' }]}
        onPress={toggleSecondDevice}
      >
        <Text style={styles.buttonText}>{secondDeviceState ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
      <Text style={styles.buttonName}>Device 2</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around', // Memberikan ruang antara perangkat
    marginTop: 20,
  },
  deviceContainer: {
    alignItems: 'center',
  },
  button: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10, // Memberikan ruang di antara tombol
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonName: {
    fontSize: 16,
  },
});

export default IoTControl;
