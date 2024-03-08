import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const FinishOrder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
      <Text style={styles.title}>Mesa 30</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name="shopping-cart" size={20} color="#1d1d2e" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    paddingVertical: "5%",
    paddingHorizontal: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
  alert: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#22c55e",
    flexDirection: "row",
    width: "65%",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    marginRight: 8,
    fontWeight: "bold",
    color: "#1d1d2e",
  },
});

export default FinishOrder;
