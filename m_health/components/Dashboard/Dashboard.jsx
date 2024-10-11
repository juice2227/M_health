import { StyleSheet, Text, View } from "react-native";
import React from "react";
//import AppointmentSection from "../sections/appointmentSection";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


const Dashboard = () => {
  return (
    <View style= {styles.container}>
        <View>
        
        
        </View>
      <Text><FontAwesome name="dashboard" size={24} color="black"  
      />Dashboard</Text>
      
      <Text><MaterialCommunityIcons name="email-outline" size={24} color="black" />Messages</Text>
      <Text><Entypo name="stopwatch" size={24} color="black" />Reminders</Text>
      <Text><MaterialCommunityIcons name="head-alert" size={24} color="black" />Allergies</Text>
      <Text><MaterialCommunityIcons name="human-white-cane" size={24} color="black" /> problems</Text>
      <Text> <MaterialIcons name="payment" size={24} color="black" />Bill pay</Text>
      <Text><FontAwesome name="calendar" size={24} color="black" />Appointments</Text>
      <Text> <MaterialIcons name="visibility" size={24} color="black" />Visits</Text>
      <Text> <Fontisto name="prescription" size={24} color="black" />Forms</Text>
      <Text><Fontisto name="pills" size={24} color="black" />Medications</Text>
      <Text><FontAwesome6 name="stethoscope" size={24} color="black" /> Clinical Information</Text>
      <Text><MaterialIcons name="campaign" size={24} color="black" />Campaigns</Text>
      <Text><FontAwesome6 name="prescription-bottle-medical" size={24} color="black" />Prescriptions</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    justifyContent: "space-evenly",
    

  }
});
