import React from "react";
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, Pressable } from "react-native";
import Telemedicine from "./Telemedicine";

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/back.jpeg")}
          style={styles.imageBack}
        />
        <Text style={styles.headerText}>
          Helping the patient in all ways possible
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All your health information in one place</Text>
        <Text style={styles.sectionContent}>
          See your medications, appointments, consultations and more exciting things.
        </Text>
        <Pressable style={styles.seeMore}>
          <Text style={styles.seeMoreText}>See More</Text>
        </Pressable>
        <Image source={require("../assets/phone.png")} style={styles.sectionImage} />
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Share your problem with confidence and get a prescription</Text>
        <Pressable style={styles.seeMore}>
          <Text style={styles.seeMoreText}>See More</Text>
        </Pressable>
        <Image source={require("../assets/nurse.jpg")} style={styles.sectionImage} />
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quickly book your appointment at any time you want</Text>
        <Text style={styles.sectionContent}>
          Make appointments at any time you want
        </Text>
        <Pressable style={styles.seeMore}>
          <Text style={styles.seeMoreText}>See More</Text>
        </Pressable>
        <Image source={require("../assets/app.jpeg")} style={styles.sectionImage} />
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connect with a doctor any place any time</Text>
        <Text style={styles.sectionContent}>
          Send a message, chat with your doctor, do a video call with a doctor anytime
        </Text>
        <Pressable style={styles.seeMore}>
          <Text style={styles.seeMoreText}>See More</Text>
        </Pressable>
        <Image source={require("../assets/couple.jpeg")} style={styles.sectionImage} />
      </View>
      <Telemedicine/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    position: 'relative',
    height: height * 0.25, 
    marginBottom: 20,
  },
  imageBack: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  sectionContent: {
    color: "#333",
    fontSize: 14,
    marginBottom: 10,
  },
  seeMore: {
    marginBottom: 10,
  },
  seeMoreText: {
    color: "#007AFF",
    fontSize: 14,
  },
  sectionImage: {
    width: '100%',
    
    aspectRatio: 1, 
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default HomeScreen;