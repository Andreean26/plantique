import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataTable = () => {
  const iotData = [
    { id: '1', name: 'IoT Device 1', pH: 6.5 },
    { id: '2', name: 'IoT Device 2', pH: 7.2 },
    // ...Tambahkan data lainnya sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Nama IoT</Text>
          <Text style={styles.headerCell}>pH Tanah</Text>
        </View>
        {iotData.map((item) => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.pH}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#000',
  //   padding: 20,
  // },
  table: {
    width: '90%',
    left: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#3498db',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginBottom: 0, // Menambahkan margin bawah agar tidak terlalu dekat dengan grafik
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#1F71F9',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  headerCell: {
    flex: 1,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    backgroundColor: '#f9f9f9', // Warna latar belakang baris
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    color: '#333333', // Warna teks
  },
});

export default DataTable;
