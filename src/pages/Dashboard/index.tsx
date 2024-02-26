import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Tela Dashboard</Text>
      <Button title="Sair do app" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
