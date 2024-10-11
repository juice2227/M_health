import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const profileSection = () => {
  return (
    <View>
        <MaterialCommunityIcons name="account-circle" size={24} color="black" />
        <Text>Celine Benard</Text>
      <Text>Email: myceline2227@gmail.com</Text>
    </View>
  )
}

export default profileSection

const styles = StyleSheet.create({})