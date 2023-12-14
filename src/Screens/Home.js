import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DataTable from '../components/Iot_table';
import Chart from '../components/Iot_graph';
import IoTControl from '../components/Iot_control';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={tw`items-end flex-1 mt-6 mr-7`}>
        <Text style={tw`text-xl font-bold text-blue-500`}>Welcome back!!</Text>
        <Text style={tw`text-xl mr-4 font-bold text-blue-500`}>Joy Sakera</Text>
      </View>


      <View style={styles.body}>
      <Text style={tw`text-xl mt-9 flex-1 ml-8 font-bold`}>Table Device</Text>

        <View style={styles.dataTableContainer}>
          <DataTable />
        </View>
        <Text style={tw`text-xl mt-9 flex-1 ml-8 font-bold`}>Graph</Text>
        <View style={styles.graphContainer}>
          <Chart />
        </View>
        <Text style={tw`text-xl mt-9 flex-1 ml-8 font-bold`}>Quick Action</Text>
        <IoTControl />
      </View>
    
    </ScrollView>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  graphContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 20,
    borderRadius: 20,
    width: '40%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    position: 'relative',
    marginBottom: 50,
    paddingTop: 20,
    top: 20,
  },
  body: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fffff',
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    top: 30,
    textAlign: 'left',
    right: 50,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    position: 'absolute',
    right: 20,
  },
  headerText2: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#3498db',
    position: 'absolute',
    marginTop: 30,
    right: 20,
  },
});

export default HomeScreen;
