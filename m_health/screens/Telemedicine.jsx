import { StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'

const Telemedicine = () => {
  return (
    <View style = {styles.container}>
      <View style ={styles.card}>
        <View style ={styles.header}> 
            <Text style ={styles.title}>welcome back</Text>
        </View>
        <View style ={styles.content}>
            <Text style = {styles.text}>rwfdgfh vvbmfwgh ghgvbcved gvwnvhgdhyfhbffvf f </Text>
        </View>
      </View>
    </View>
  )
}

export default Telemedicine

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",

    },
    card:{
        backgroundColor: "white",
        borderRadius: 15,
        padding: 16,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elavetion : 14,
        width: 350,
        height: 350,
        justifyContent: "center",
        alignItems: "center",

    },
    header:{
        marginBottom: 16,
        alignItems: "center",
    },
    text:{
        fontSize:17,
        alignItems: "center",
        color: "#444444"
    },
    content:{
        alignItems: "center",
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "green",

    }
})