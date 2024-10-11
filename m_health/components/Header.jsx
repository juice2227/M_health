import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style ={styles.container}>
      <Image source={require('../assets/girl.jpg')} style = {styles.profilePic}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{},
    profilePic: {
        height: 30,
        width: 45,
        
    }
    
})