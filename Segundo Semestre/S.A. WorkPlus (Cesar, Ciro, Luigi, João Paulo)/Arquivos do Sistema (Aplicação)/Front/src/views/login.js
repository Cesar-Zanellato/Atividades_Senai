import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import api from "../api";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = async () => {
    try {
      const authData = await api.post("/login", {
          email,
          password
      });
      if(authData.status === 200){
          navigation.navigate("Home");
      } else {
        alert(authData.data.message);
        setPassword('');
      }
    } catch (error) {
      alert("ERRO");
      setPassword('');
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topBotaoCadastrar}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} >
          <View style={styles.viewBotaoCadastrar}>
            <Text style={styles.botaoCadastrar}>Cadastrar</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.toplogo}>
          <Image
            style={styles.imagemLogo}
            source={require("../assets/logo.png")}
          />
        </View>
        <View style={styles.topTitulo}>
          <Text style={styles.TextoTitulo}>WorkPlus</Text>
        </View>
      </View>
      <View style={styles.meio}>

        <View style={styles.meioUsuario}>
          <View style={styles.viewUsuario}>
            <TextInput
              style={styles.InputUsuario}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.viewImagemUsuario}>
            <Image 
              style={styles.imagemUsuario} 
              source={require('../assets/usuario.png')}
            />
          </View>
        </View>

        <View style={styles.meioSenha}>
          <View style={styles.viewSenha}>
            <TextInput
              style={styles.InputSenha}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.viewImagemSenha}>
            <Image 
              style={styles.imagemSenha} 
              source={require('../assets/Cadeado.png')}/>
          </View>
        </View>
      </View>
      <View style={styles.baixo}>

        <View style={styles.baixoBotaoEntrar}>

        <TouchableOpacity 
          onPress={onLoginPressed}
        >
          <View style={styles.BotaoEntrar}>
            <View style={styles.viewTextoEntrar}>
              <Text style={styles.TextoEntrar}>Entrar</Text>
            </View>
            <View style={styles.viewImagemEntrar}>
            <Image 
                  style={styles.imagemDuplaEngrenagem} 
                  source={require('../assets/duplaEngrenagem.png')}/>
            </View>
          </View>
        </TouchableOpacity>

       </View>

       <View style={styles.baixoBotaoEsqueceu}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EsqueciSenha")}
          >
            <Text style={styles.textoEsqueceu}>Esqueci minha senha</Text>
          </TouchableOpacity>
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 800,
  },
  top: {
    width: "100%",
    height: "45%",
  },
  topBotaoCadastrar: {
    justifyContent: 'center',
    paddingLeft: '60%',
    width: "100%",
    height: "15%",
    marginTop: '22%'
  },
  viewBotaoCadastrar: {
    width: "70%",
    height: "100%",
  },
  botaoCadastrar: {
    width: "100%",
    fontSize: 19,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 14,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  toplogo: {
    width: "100%",
    height: "45%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagemLogo: {
    width: "45%",
    height: "95%",
  },
  topTitulo: {
    width: "100%",
    height: "16.5%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextoTitulo: {
    fontSize: 49
  },
  meio: {
    marginTop: '9%',
    width: "100%",
    height: "15%",
  },
  meioUsuario: {
    width: "100%",
    height: "50%",
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row' 
  },
  meioSenha: {
    width: "100%",
    height: "50%",
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  viewUsuario:{
    width: "60%",
    height: "100%",
  },
  viewImagemUsuario:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'3%',
    height: "80%",
    width: "12%",
    borderRadius: 5,
    borderBottomLeftRadius: 0, 
    marginBottom:'5.3%',
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  imagemUsuario:{
    width: "80%",
    height: "100%",
  },
  InputUsuario:{
    width: "100%",
    fontSize: 19,
    borderRadius: 5,
    borderBottomRightRadius: 0 ,
    paddingLeft: 9,
    paddingRight: 5,
    paddingTop: 14,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  viewSenha:{
    width: "60%",
    height: "100%",
  },
  viewImagemSenha:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'3%',
    height: "80%",
    width: "12%",
    borderRadius: 5,
    borderBottomLeftRadius: 0, 
    marginBottom:'5.3%',
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  imagemSenha:{
    width: "76%",
    height: "100%",
  },
  InputSenha:{
    width: "100%",
    fontSize: 19,
    borderRadius: 5,
    borderBottomRightRadius: 0 ,
    paddingLeft: 9,
    paddingRight: 5,
    paddingTop: 14,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  baixo:{
    width: "100%",
    height: "37%",
  },
  baixoBotaoEntrar:{
    marginTop:'7%',
    marginBottom:'1%',
    width: "100%",
    height: "17%",
    justifyContent:'center',
    alignItems:'center'
  },
  BotaoEntrar:{
    flexDirection:'row',
    width: "30%",
    height: 35,
    backgroundColor:'#13387D',
    borderRadius: 5,
  },
  viewTextoEntrar:{
    width: "80%",
    height: "100%",   
    alignItems:'center',
  },
  TextoEntrar:{
    fontSize:25,
    color:'white',
  },
  viewImagemEntrar:{
    paddingTop:'3%',
    width: "20%",
    height: "100%",
  },
  imagemDuplaEngrenagem:{
    width: "100%",
    height: "90%",
  },
  baixoBotaoEsqueceu:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:'3%',
    width: "100%",
    height: "10%",
  },
  textoEsqueceu:{
    fontSize:16,
    color:'blue',
  },

});

export default Login;