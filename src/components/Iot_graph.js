import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import axios from 'axios';

const fetchData = () => {
  axios.get('http://192.168.1.14/sensor')
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

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#F7EFE5",
  borderRadius: 40,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFBF5",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(15, 15, 15, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};

const iotData = [
    { id: '1', name: 'IoT Device 1', pH: 6.5 },
    { id: '2', name: 'IoT Device 2', pH: 7.2 },
    // ...Tambahkan data lainnya sesuai kebutuhan
  ];


const dataForChart = {
  labels: iotData.map(item => item.name), // Label dari perangkat IoT
  datasets: [
    {
      data: iotData.map(item => item.pH), // Data pH dari setiap perangkat IoT
      color: (opacity = 1) => `rgba(15, 15, 15, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["pH Device"] // Keterangan pada legenda
};

const Chart = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={dataForChart}
        width={screenWidth - 100}
        height={300}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    width: 350,
    left: 118,
    borderColor: 'black',
    padding: 20,
    top: -15,
    alignItems: 'center',
    justifyContent: 'center',
    // Add additional styles for your container here
  },
});

export default Chart;
