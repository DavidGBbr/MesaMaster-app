import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth } = useContext(AuthContext);

  const handleLogin = async () => {
    if (email === "" || password === "") return;

    await signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Mesa<Text style={{ color: "#f77500" }}>Master</Text>
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          placeholderTextColor="#f0f0f0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          placeholderTextColor="#f0f0f0"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={25} color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d1d2e",
  },
  logo: { marginBottom: 18, fontSize: 42, color: "#fff" },
  inputContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 32,
  },
  input: {
    width: "95%",
    height: 40,
    backgroundColor: "#020617",
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#fff",
  },
  button: {
    width: "95%",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#22c55e",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
