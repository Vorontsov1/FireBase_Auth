import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleSignOut = () => { 
        auth.signOut().then(() => {
            navigation.replace("Login");
        }).catch((error) => alert(error.message));
    }

  return (
    <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Email:{' '} {auth.currentUser?.email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignOut}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2711D",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: "90%",
    backgroundColor: "#FFB627",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
    padding: 5,
  },
});

export default HomeScreen;
