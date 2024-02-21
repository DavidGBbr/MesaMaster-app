import { StyleSheet, View, StatusBar } from "react-native";
import SignIn from "./src/pages/Signin";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#141420"
        barStyle="light-content"
        translucent={false}
      />
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141420s",
    alignItems: "center",
    justifyContent: "center",
  },
});
