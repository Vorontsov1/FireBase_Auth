import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const navigation = useNavigation();
    useEffect(() => {
      const unsubscribe =  auth.onAuthStateChanged((user) => {
          if (user) {
            navigation.replace("Home");
          }
        });
    
        return unsubscribe;
      
     }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

    const handleLogin = () => { 
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Logged in with:", user.email);
        })
        .catch((error) => alert(error.message));
    };
    
  return (
    <KeyboardAvoidingView style={styles.container} behavor="padding">
      <View style={styles.inputContainer}>
        <Icon name="mail" size={16} color="#0B0C10" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#9C9C9C"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock-closed" size={16} color="#0B0C10" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9C9C9C"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonOutline]}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#E2711D",
  },
  text: {
    color: "darkslateblue",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FFB627",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#00A676",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  buttonText: {
    color: "#00A676",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 5,
  },
  buttonOutline: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#00A676",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 14,
    color: "#0B0C10",
  },
});

export default LoginScreen;