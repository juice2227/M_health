import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { Dropdown } from "react-native-element-dropdown";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import DataTable from "react-data-table-component";
import { LinearGradient } from "expo-linear-gradient";

const appointmentSection = () => {
  const [selected, setSelected] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [value] = useState([
    { label: "Physical ", value: "1" },
    { label: "THERAPY", value: "2" },
    { label: "x-ray", value: "3" },
    { label: "Scan", value: "4" },
    { label: "Physical ", value: "5" },
    { label: "Physical ", value: "6" },
  ]);

  const columns = [
    {
      name: "Service",
      selector: (row) => row.service,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
  ];

  const data = [
    {
      id: 1,
      service: "Physical",
      location: "Nairobi",
      date: "15-August-2017",
      time: "10:30AM",
    },
    {
      id: 2,
      service: "Physical",
      location: "Nairobi",
      date: "15-August-2017",
      time: "10:30AM",
    },
    {
      id: 3,
      service: "Physical",
      location: "Nairobi",
      date: "15-August-2017",
      time: "10:30AM",
    },
  ];

  const buttonTextStyle = {
    color: "green",
  };

  return (
    <LinearGradient colors={["#f5f5f5", "#f5f5f5"]} style={styles.linear}>
      <View style={styles.container}>
        <Text>Appointment History</Text>
        <View>
          <DataTable columns={columns} data={data} selectableRows />
        </View>
        <View>
          <Text>Request New Appointment</Text>
          <View>
            <ProgressSteps>
              <ProgressStep
                label="Select reason for visit"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={buttonTextStyle}
              >
                <View></View>
              </ProgressStep>
              <ProgressStep label="Select Practice Location">
                <View></View>
              </ProgressStep>
              <ProgressStep label="Select type of service">
                <View></View>
              </ProgressStep>
            </ProgressSteps>
          </View>
          <View>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Email" />
          </View>
        </View>
        <Text>Appointment Type</Text>
        <Dropdown
          data={value}
          labelField="label"
          valueField="value"
          placeholder="...Select.."
          value={selected}
          onChange={(item) => setSelected(item.value)}
        />
        <Text>Other</Text>
        <Dropdown
          data={value}
          labelField="label"
          valueField="value"
          placeholder="...Select... "
          value={selected}
          onChange={(item) => setSelected(item.value)}
        />
        <Checkbox value={isChecked} onValueChange={setChecked} />
        <Text>I am not sure</Text>
        <Button color={"gray"}>Next</Button>
      </View>
      <Button color={"gray"} onPress={buttonTextStyle}>
        Next
      </Button>
      <Text>step 2</Text>
      <Checkbox disabled value={isChecked} />
      <Text>HSR Layout</Text>
      <Text>hours</Text>
      <Text>Mon -thur 7:00 am to 6:30pm, fri 8:00am to 5:00pm</Text>
      <Text>Address</Text>
      <Text>19th main road Sector 3</Text>
      <Text>HSR Layout KENYA</Text>
      <Text></Text>Nairobi -1234
      <Text color = {"green"}>UPDATE LOCATION</Text>
    </LinearGradient>
  );
};

export default appointmentSection;

const styles = StyleSheet.create({
  container: {},
  linear: {
    flex: 1,
    padding: 25,
  },
});
