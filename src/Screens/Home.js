import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import DataTable from '../components/Iot_table';
import Chart from '../components/Iot_graph';
import IoTControl from '../components/Iot_control';
import tw from 'twrnc';


const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
    <ScrollView style={styles.container}>
      <View style={tw`items-end flex-1 mt-6 mr-7`}>
        <Text style={tw`text-xl font-bold text-blue-500`}>Welcome back!!</Text>
        <TouchableOpacity onPress={handleButtonPress}>
        <Text style={tw`text-xl mr-4 font-bold text-blue-500 border-b border-blue-500`}>Joy Sakera</Text>

        </TouchableOpacity>
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

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', height: '65%' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>User Profile</Text>
            <View style={styles.borderImage}>
              <Image
                source={require('../assets/img/joy.jpeg')} // Ganti dengan path foto pengguna
                style={styles.borderImage}
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}>Name     :</Text>
                <Text style={{ fontSize: 20, }}>Joy Sakera</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}>Email     :</Text>
                <Text style={{ fontSize: 20, }}>joy@google.com</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}>Telepon :</Text>
                <Text style={{ fontSize: 20, }}>0826-4563-1390</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}>Alamat   :</Text>
                <Text style={{ fontSize: 20, }}>cakalang, malang</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', top:50}}>
              <TouchableOpacity style={{ width: 120, height: 40, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} onPress={closeModal}>
                <Text style={{ color: 'white' }}>Close</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </ScrollView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  borderImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Setengah dari lebar/tinggi agar menjadi lingkaran
    overflow: 'hidden', // Memastikan bagian gambar yang melewati batas terpotong
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    left: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100, // Sama dengan border radius pada container gambar
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
