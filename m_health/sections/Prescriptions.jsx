import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


const Prescriptions = () => {
const tableData = [
    ['REFILL DATE', 'MEDICATION', 'QTY'],
    ['12-Nov-2024', 'antipyretics', '10'],
    ['12-Nov-2024', 'Antibiotics', '50'],
    ['12-Nov-2024', 'Antibiotics', '60'],
  ];

  return (
    <View style = {styles.container}>
      <Text  style={styles.headText}><FontAwesome6 name="prescription-bottle-medical" size={24} color="black" />Prescriptions</Text>
      <View style ={styles.horizontalLine}></View>
      <View style ={styles.containerTable}>
       
        </View> 
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
      <TouchableOpacity  onPress={() => console.log("View more")} ><Text style={styles.text}>View More</Text></TouchableOpacity>
    
    </View>
  )
}

export default Prescriptions

const styles = StyleSheet.create({
    container:{
        paddingTop: 50,
        margin: 10,

    },
    containeTable:{
      width: "80%",
      alignSelf: "center",
      margin: 20,
    },
    horizontalLine: {
        height: 2,
        width: "100%",
        backgroundColor: "purple"
      },
      headText: {
        fontWeight: "bold",
        fontSize: 16,
        padding: 10,
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
        
      },
      headerText: {
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 14,
      },
      cellText: {
        textAlign: 'center',
        color: 'gray',
    
      },
      text:{
        textAlign: "center",
      },
})