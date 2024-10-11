import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "@expo/vector-icons/Entypo";


const Reminders = () => {
const tableData = [
    ['Appointment', 'Type', 'Date'],
    ['Dr.Radha', 'Lab Test', '10-Nov-2017'],
    ['Dr.Radha', 'Blood Test', '12-Nov-2017'],
    ['Dr.Suni', 'Lab Test', '15-Nov-2017'],
  ];

  return (
    <View style = {styles.container}>
      <Text style ={styles.reminderText}><Entypo name="stopwatch" size={24} color="black" />Reminders</Text>
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

export default Reminders

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
        height: 1,
        width: "100%",
        backgroundColor: "#1111ef"
      },
      reminderText: {
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
})