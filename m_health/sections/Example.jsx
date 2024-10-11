import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SimpleTable = () => {
  const tableData = [
    ['Appointment', 'Type', 'Date'],
    ['Dr.Radha', 'Lab Test', '10-Nov-2017'],
    ['Dr.Radha', 'Blood Test', '12-Nov-2017'],
    ['Dr.Suni', 'Lab Test', '15-Nov-2017'],
  ];

  return (
    <View style={styles.container}>
      {tableData.map((rowData, rowIndex) => (
        <View key={rowIndex}>
          <View
            style={[
              styles.row,
              rowIndex === 0 ? styles.headerRow : null,
            ]}>
            {rowData.map((cellData, cellIndex) => (
              <View
                key={cellIndex}
                style={[
                  styles.cell,
                  cellIndex < rowData.length - 1 ? styles.cellBorder : null,
                ]}>
                <Text style={rowIndex === 0 ? styles.headerText : styles.cellText}>
                  {cellData}
                </Text>
              </View>
            ))}
          </View>
          {rowIndex === 0 && <View style={styles.headerLine} />}
          {rowIndex === tableData.length - 1 && <View style={styles.bottomLine} />}
        </View>
        
      ))}
      <TouchableOpacity style={styles.text}>View more</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 75,
    backgroundColor: "#FFFFFF"
  },
  row: {
    flexDirection: 'row',
  },
  headerRow: {
    backgroundColor: '#FFFFFF',
  },
  headerLine: {
    height: 1,
    width:"100%",
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  bottomLine: {
    height: 1,
    width: "100%",
    backgroundColor: 'gray',
    marginTop: 10,
  },
  cell: {
    
    padding: 10,
  },
  cellBorder: {
    // You can add cell borders here if needed
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cellText: {
    textAlign: 'center',
    color: 'gray',

  },
  text:{
    textAlign: "center",
  },
});

export default SimpleTable;