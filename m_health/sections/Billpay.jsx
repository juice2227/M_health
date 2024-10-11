import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Billpay = () => {
  const tableData = [
    ['BILL TYPE', 'AMOUNT', 'PAY ONLINE'],
    ['Allergies', '$34.50', 'Pay Now'],
    ['Blood checkup', '$34.50', 'Pay Now'],
    ['Blood checkup', '$34.50', 'Pay Now'],
  ];

  const renderCell = (cellData, rowIndex, cellIndex) => {
    if (cellData === 'Pay Now' && rowIndex !== 0) {
      return (
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>{cellData}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <Text style={rowIndex === 0 ? styles.headerText : styles.cellText}>
        {cellData}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text>
        <MaterialIcons name="payment" size={24} color="black" />Bill pay
      </Text>
      <View style={styles.horizontalLine}></View>
      <View style={styles.containerTable}>
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
                  {renderCell(cellData, rowIndex, cellIndex)}
                </View>
              ))}
            </View>
            {rowIndex === 0 && <View style={styles.headerLine} />}
            {rowIndex === tableData.length - 1 && <View style={styles.bottomLine} />}
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={() => console.log("View more")}>
        <Text style={styles.text}>View More</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Billpay

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 10,
  },
  containerTable: {
    width: "100%",
    alignSelf: "center",
    marginVertical: 20,
  },
  horizontalLine: {
    height: 2,
    width: "100%",
    backgroundColor: "green"
  },
  row: {
    flexDirection: 'row',
  },
  headerRow: {
    backgroundColor: '#FFFFFF',
  },
  headerLine: {
    height: 1,
    width: "100%",
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cellText: {
    textAlign: 'center',
    color: 'gray',
  },
  text: {
    textAlign: "center",
  },
  payButton: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 35,
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    flexDirection: 'column'
  },
})