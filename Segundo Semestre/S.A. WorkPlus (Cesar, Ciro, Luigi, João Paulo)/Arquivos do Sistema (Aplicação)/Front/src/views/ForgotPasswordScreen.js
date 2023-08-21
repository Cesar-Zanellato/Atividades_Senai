import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

const EsqueciSenha = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topo}>

        <View style={styles.viewImage}>

          <Image style={styles.logo} source={require('../assets/logo.png')} />

        </View>

        <View style={styles.viewTextoWorkPlus}>

          <Text style={{ fontSize: 50 }}>Work Plus</Text>

        </View>

      </View>

      <View style={styles.inputContainer}>
        <View style={styles.viewInputEmail}>
          <Text style={{ marginTop: 20 }}>Insira seu e-mail abaixo:</Text>

          <TextInput
            style={styles.inputEmail}
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View style={styles.viewButtonReset}>
        <TouchableOpacity
          style={styles.buttonResetPassword}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F5FCFF",
  width: "100%",
  height: "100%",
},
topo: {
  width: "100%",
  height: '20%',
},
inputContainer: {
  width: "100%",
  height: '30%',
  paddingTop: '6%',
  alignItems: "center",
  justifyContent: "center",
},
viewButtonReset: {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: '20%',
},
viewImage: {
  width: "100%",
  height: '60%',
},
logo: {
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
  marginBottom: 20,
},
viewTextoWorkPlus: {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: '40%',
},
inputEmail: {
  height: 45,
  width: "80%",
  borderColor: "gray",
  borderWidth: 1,
  marginTop: 20,
  paddingHorizontal: 10,
},
viewInputEmail: {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
},
buttonResetPassword: {
  backgroundColor: "blue",
  textAlign: "center",
  borderRadius: 5,
  padding: 10,
  marginTop: 20,
  width: "45%",
},
buttonText:{
  color: "white",
}
});

export default EsqueciSenha;