import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const SensorTable = () => {
  const [sensorData, setSensorData] = useState({
    status: '',
    nilai: '',
  });

  const [predictionData, setPredictionData] = useState('');

  const fetchData = () => {
    axios.get('http://172.20.10.2/sensor')
      .then(response => {
        console.log('Response from sensor:', response.data);
        setSensorData({
          status: response.data.responseMessage,
          nilai: response.data.nddiValue,
        });
      })
      .catch(error => {
        console.error('Error fetching sensor data:', error);
      });
  };

  const fetchPredict = () => {
    axios.get('http://172.20.10.2:8000/result')
      .then(response => {
        console.log('Response from prediction:', response.data);
        setPredictionData(response.data.predict);
      })
      .catch(error => {
        console.error('Error fetching prediction data:', error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchPredict();

    const interval = setInterval(() => {
      fetchData();
      fetchPredict();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.keyText}>Status</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.valueText}>{sensorData.status}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.keyText}>Nilai</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.valueText}>{sensorData.nilai}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.keyText}>Prediction</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.valueText}>{predictionData}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000', // Warna outline border
    width: '100%',
    paddingVertical: 15,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent', // Ubah border jadi transparan
    paddingVertical: 8,
  },
  keyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  valueText: {
    fontSize: 16,
    color: '#666',
  },
});

export default SensorTable;
