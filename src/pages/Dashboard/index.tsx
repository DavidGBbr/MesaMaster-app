import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

const Dashboard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [number, setNumber] = useState("");
  const { signOut } = useContext(AuthContext);

  const openOrder = async () => {
    if (number === "") {
      return;
    }
    navigation.navigate("Order", { number: number, order_id: "123" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>
      <TextInput
        placeholder="Número da mesa"
        placeholderTextColor="#f0f0f0"
        keyboardType="numeric"
        style={styles.input}
        value={number}
        onChangeText={setNumber}
      />
      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#020617",
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#22c55e",
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#020617",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Dashboard;
