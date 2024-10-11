import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

const socket = io ("")



const ChatandVideo = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSendMessage = () => {
    if(message.trim()===) {
      return;
    }
    socket.emit('chat message', message);
    setMessages([...messages, message]);
    setMessage();

  };
  useEffect (() =>{
    socket.on ('')
  })
  return (
    <View>
      <FlatList 
      data={messages}
      keyExtractor={(item,index) => index.toString()}
      renderItem={({item}) => <Text>{item}</Text>}
      />
      <TextInput 
      placeholder='Type your message'
      value= {message}
      onChangeText={setMessage}
      />
      <Button title='send' onPress={handleSendMessage}/>
    </View>
  )
}

export default ChatandVideo

const styles = StyleSheet.create({})


