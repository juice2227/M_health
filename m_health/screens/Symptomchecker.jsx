import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import base64 from 'react-native-base64';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const AUTH_URL = 'https://authservice.priaid.ch/login';
  const HEALTH_URL = 'https://healthservice.priaid.ch';
  const USERNAME = 'o9TAd_GMAIL_COM_AUT';
  const PASSWORD = 'Lx42FcGk83Bgt5S7A';

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const authString = base64.encode(`${USERNAME}:${PASSWORD}`);
      const response = await axios.post(AUTH_URL, {}, {
        headers: { 'Authorization': `Basic ${authString}` }
      });
      setToken(response.data.Token);
    } catch (error) {
      console.error('Error getting token:', error);
      setError('Failed to authenticate. Please try again later.');
    }
  };

  const checkSymptoms = async () => {
    if (!symptoms.trim() || !token) {
      setError('Please enter symptoms and ensure you have a valid token.');
      return;
    }
    setIsLoading(true);
    setResult('');
    setError('');

    try {
      const response = await axios.get(`${HEALTH_URL}/symptoms`, {
        params: {
          token: token,
          language: 'en-gb',
          symptoms: symptoms.split(',').map(s => s.trim()).join(','),
          format: 'json'
        }
      });
     
      if (response.data && response.data.length > 0) {
        const proposedSymptoms = response.data.map(symptom => symptom.Name).join(', ');
        setResult(`Proposed symptoms: ${proposedSymptoms}`);
      } else {
        setResult('No symptoms found matching your input.');
      }
    } catch (error) {
      console.error('Error checking symptoms:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      setError(`An error occurred while checking symptoms: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Symptom Checker</Text>
      <TextInput
        style={styles.input}
        value={symptoms}
        onChangeText={setSymptoms}
        placeholder="Enter symptoms (e.g., headache, fever)"
        placeholderTextColor="#888"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={checkSymptoms}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Checking...' : 'Check Symptoms'}
        </Text>
      </TouchableOpacity>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {result ? <Text style={styles.resultText}>{result}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SymptomChecker;