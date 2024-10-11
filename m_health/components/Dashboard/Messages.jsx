import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dropdown } from "react-native-element-dropdown";
import DataTable from "react-data-table-component";

const Messages = () => {
  const columns = [
    {
      name: "From",
      selector: (row) => (
        <View style={styles.dataRow}>
          <Text>{row.from}</Text>
          {row.isStarred ? (
            <AntDesign name="star" size={16} color="gold" style={styles.starSpacing} />
          ) : (
            <AntDesign name="staro" size={16} color="gold" style={styles.starSpacing} />
          )}
        </View>
      ),
    },
    { name: "Subject", selector: (row) => row.subject },
    { name: "Message Type", selector: (row) => row.message },
    { name: "Date", selector: (row) => row.date },
    { name: "Time", selector: (row) => row.time },
  ];

  const data = [
    { id: 1, from: "Physical", subject: "Nairobi", message: "General Question", date: "15-August-2017", time: "10:30AM", isStarred: true },
    { id: 2, from: "Physical", subject: "Nairobi", message: "General Question", date: "15-August-2017", time: "10:30AM", isStarred: false },
    { id: 3, from: "Physical", subject: "Nairobi", message: "General Question", date: "15-August-2017", time: "10:30AM", isStarred: false },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.breadcrumb}>Home Messages</Text>
      <View style={styles.main}>
        <Text style={styles.inboxTitle}><Octicons name="inbox" size={24} color="black" /> Inbox</Text>
        <View style={styles.horizontalLine}></View>

        {/* Row with Check All, Clear All, and Refresh */}
        <View style={styles.boxRow}>
          <View style={styles.boxOne}>
            <Text><AntDesign name="checksquare" size={24} color="black" /> Check all</Text>
            <Text><MaterialIcons name="clear" size={24} color="black" /> Clear all</Text>
            <Text><Ionicons name="refresh-sharp" size={24} color="black" /> Refresh</Text>
          </View>

          {/* Row with Drafts, Sent Items, and Delete aligned to the right */}
          <View style={styles.boxTwo}>
            <Text><MaterialIcons name="drafts" size={24} color="black" /> Drafts</Text>
            <Text><MaterialIcons name="outbox" size={24} color="black" /> Sent Items</Text>
            <Text><AntDesign name="delete" size={24} color="black" /> Delete</Text>
          </View>
        </View>

        {/* Row with 115 Messages, Icons, and Display Dropdown */}
        <View style={styles.iconRow}>
          <Text style={styles.messageCount}>115 Messages</Text>
          <View style={styles.iconsContainer}>
            <FontAwesome name="print" size={24} color="black" style={styles.iconSpacing} />
            <Entypo name="forward" size={24} color="black" style={styles.iconSpacing} />
            <AntDesign name="delete" size={24} color="black" style={styles.iconSpacing} />
          </View>
          <Text>Display</Text>
          <Dropdown
            valueField="value"
            placeholder="10"
            style={styles.dropdownStyle}
          />
        </View>

        <View style={styles.horizontalLine}></View>

        {/* Container for DataTable and Appointment */}
        <View style={styles.dataAndAppointmentContainer}>
          {/* DataTable */}
          <View style={styles.dataTableContainer}>
            <DataTable columns={columns} data={data} selectableRows />
          </View>

          {/* Appointment Confirmation - Placed on the right */}
          <View style={styles.appointmentContainer}>
            <Text style={styles.appointmentTitle}>Appointment Confirmation</Text>
            <Text>From: Dr Rajav</Text>
            <Text>To: Kumar</Text>
            <Text>Time: 1:30 PM</Text>
            <Text style={styles.letter}>Dear Sir,</Text>
            <Text style={styles.paragraph}>This is a confirmation message that your appointment has been approved successfully.</Text>
            <Text>Regards,</Text>
            <Text style={styles.signature}>Dr Rajav</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#D3D3D3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  breadcrumb: {
    textAlign: "center",
    marginBottom: 10,
    color: "#888",
  },
  main: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inboxTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  horizontalLine: {
    height: 2,
    width: "100%",
    backgroundColor: "green",
    marginVertical: 10,
  },
  boxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxOne: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  boxTwo: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  messageCount: {
    color: "green",
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
  iconSpacing: {
    marginLeft: 15,
  },
  dropdownStyle: {
    width: 60,
    marginLeft: 10,
  },
  dataAndAppointmentContainer: {
    flexDirection: "row", // Makes DataTable and Appointment Container side by side
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
  },
  dataTableContainer: {
    flex: 3,
    marginRight: 10, // Right margin for spacing between the table and appointment
  },
  appointmentContainer: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
  },
  appointmentTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  letter: {
    marginTop: 10,
  },
  paragraph: {
    marginVertical: 10,
  },
  signature: {
    marginTop: 10,
    fontStyle: "italic",
  },
});
