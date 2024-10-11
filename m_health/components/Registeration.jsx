import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Registeration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setSubmittedData(data);
  };

  return (
    <SafeAreaView style={styles.safe}>
      
      <View style={styles.container}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              placeholder="firstname"
              style={styles.input}
            />
          )}
          name="firstname"
          rules={{ require: "You must enter your first name" }}
        />
        {errors.name && <Text style={styles.input}>{errors.name.message}</Text>}
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              placeholder="firstname"
              style={styles.input}
            />
          )}
          name="firstname"
          rules={{ require: "You must enter your first name" }}
        />
        {errors.name && (
          <Text style={styles.errorText}>{errors.name.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput {...field} placeholder="email" style={styles.input} />
          )}
          name="email"
          rules={{
            require: "You must enter your first name",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          }}
        />
        {errors.name && (
          <Text style={styles.input}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput {...field} placeholder="password" style={styles.input} />
          )}
          name="password"
          rules={{
            require: "You must enter your first name",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          }}
        />
        {errors.name && (
          <Text style={styles.input}>{errors.email.message}</Text>
        )}

        <Text style={styles.text}>forgot Password ?</Text>
        <Pressable
          title="REGISTER"
          onPress={handleSubmit(onsubmit)}
          style={styles.button}
        >
          REGISTER
        </Pressable>

        <Text style={styles.signUp}>Already have an account? sign in</Text>
      </View>
    </SafeAreaView>
  );
};

export default Registeration;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    padding: 25,

    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "green",
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
    padding: 15,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    color: "white",
    backgroundColor: "green",
    padding: 10,
    textAlign: "center",
    borderRadius: 15,
  },
  text: {
    color: "green",
    marginLeft: 65,
    alignItems: "flex-end",
  },
  signUp:{
    color: "green",
    marginLeft: 65,
    alignItems: "center",

  },
});
