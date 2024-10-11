import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ClinicalInformation = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.clinicalText}>
          <FontAwesome6 name="stethoscope" size={24} color="black" /> Clinical Information
        </Text>
        <View style={styles.horizontalLine}></View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.card}>
            <Fontisto name="pills" size={24} color="black" />
            <Text style={styles.cardText}>Medications</Text>
          </View>
          <View style={styles.card}>
            <MaterialCommunityIcons name="head-alert" size={24} color="black" />
            <Text style={styles.cardText}>Allergies</Text>
          </View>
          <View style={styles.card}>
            <MaterialCommunityIcons name="human-white-cane" size={24} color="black" />
            <Text style={styles.cardText}>Problems</Text>
          </View>
          <View style={styles.card}>
            <MaterialIcons name="visibility" size={24} color="black" />
            <Text style={styles.cardText}>Visits</Text>
          </View>
          <View style={styles.card}>
            <Fontisto name="test-bottle" size={24} color="black" />
            <Text style={styles.cardText}>Discharge Instruction</Text>
          </View>
          <View style={styles.card}>
            <MaterialIcons name="family-restroom" size={24} color="black" />
            <Text style={styles.cardText}>Family History</Text>
          </View>
          <View style={styles.card}>
            <MaterialCommunityIcons name="notebook" size={24} color="black" />
            <Text style={styles.cardText}>Social History</Text>
          </View>
          <View style={styles.card}>
            <Fontisto name="injection-syringe" size={24} color="black" />
            <Text style={styles.cardText}>Immunization</Text>
          </View>
          <View style={styles.card}>
            <Ionicons name="flask" size={24} color="black" />
            <Text style={styles.cardText}>Tests and Procedures</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ClinicalInformation

const styles = StyleSheet.create({
  outerContainer: {
    paddingTop: 75,
    paddingBottom: 0,
    backgroundColor: " #FFFFFF"
  },
  container: {
    flex: 1,		
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    overflow: 'hidden',
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: " #FFFFFF",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#1111ef"
  },
  clinicalText: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 5,
    textAlign: "center",
  },
})