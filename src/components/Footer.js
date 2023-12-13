import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>PlantIQue | Mobile | IOT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1F71F9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;
