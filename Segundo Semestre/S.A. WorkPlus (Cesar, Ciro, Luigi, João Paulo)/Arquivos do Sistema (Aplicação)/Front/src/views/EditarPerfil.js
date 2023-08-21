import React, { useState, useEffect, useRef } from "react";
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity,} from "react-native";

const EditarPerfil = ({navigation}) => {
  
  const [name, setName] = useState('Ciro Valerio Jr');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterPressed = async () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
    } else {
        try {
          const data = await api.post("/user/register/novamente", {
            name: name,
            userName: userName,
            email: email,
            endereco: endereco,
            password: password,
          });
          if(data.status === 200){
            console.log(data);
            alert(data.data.message);
            navigation.navigate("Perfil")
          } else {
            console.log(data);
          };
        } catch (error) {
          console.log(error)
        };
      };
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.topoFoto}>

        <View style={styles.foto}>
        
        </View>

        <View style={styles.divAlterarFoto}>
                <Image
                  style={styles.imagemgAlterarFoto}
                  source={require("../assets/AlterarFoto.png")}
                />
        </View>
      
      </View>

      <View style={styles.nome}>
        <TextInput
          style={styles.nomeUsuario}
          value={name}
          onChangeText={setName}
          editable={false}
        />
      </View>

      <View style={styles.linha}>
                <Image
                  style={styles.imagemLInha}
                  source={require("../assets/linhaHorizontal.png")}
                />
      </View>

      <View style={styles.containerInputs}>

        <View style={styles.divInputs}>
          
          <View style={styles.divNomeUsuario}>
            <Text style={styles.TituloNomeInfo}>Nome de Usuário</Text>
            <TextInput
              style={styles.TextInput}
              value={userName}
              onChangeText={setUserName}
            />
          </View>

          <View style={styles.divNomeUsuario}>
            <Text style={styles.TituloNomeInfo}>E-mail</Text>
            <TextInput 
              style={styles.TextInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.divNomeUsuario}>
            <Text style={styles.TituloNomeInfo}>Endereço</Text>
            <TextInput 
              style={styles.TextInput}
              value={endereco}
              onChange={setEndereco}
            />
          </View>

          <View style={styles.divNomeUsuario}>
            <Text style={styles.TituloNomeInfo}>Nova Senha</Text>
            <TextInput 
              style={styles.TextInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>


            <View style={styles.divBotaoFinalizar} >
              <TouchableOpacity 
                onPress={onRegisterPressed}
              >
                <Image 
                  style={styles.imagemBotaoEditar} 
                  source={require('../assets/botaoEditar.png')}/>
              </TouchableOpacity>
            </View>

        </View>

      </View>

      <View style={styles.baixo}>
        <View style={styles.suasOfertas}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Trabalho')}
          >
            <Text style={styles.botaoMeustrabalhos}>Meus Trabalhos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.casinha}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{ width: 35, height: 40, left: 16.5 }}
            source={require("../assets/casinha.png")}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.suasDemandas}>
          <TouchableOpacity onPress={() => navigation.navigate('Servico')}>

            <Text style={styles.botaoMeusServicos}>Meus Servicos</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.usuarioBaixo}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPremium')}>
          <Image
            style={{ height: 28, width: 40, right: 5}}
            source={require("../assets/menu.png")}
          />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 900,
    width:410

  },
  topoFoto: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
    width:'100%',
    flexDirection:'row',
    paddingLeft: 92,
  },
  foto: {
    borderRadius: 100,
    height: "70%",
    width: "50%",
    backgroundColor:'#B6BFD0',
    marginTop: 45
  },
  divAlterarFoto: {
    height: "15%",
    width: "29%",
    marginTop: 170
  },
  imagemgAlterarFoto: {
    height: '60%',
    width: "105%",
  },
  nome: {
    height: '5%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nomeUsuario:{
    fontSize: 24
  },
  linha: {
    height: '1%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemLInha:{
    height: "100%",
    width: "98%",
  },
  containerInputs: {
    height: '57%',
    width:'100%',
    flex:8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    paddingBottom:10
  },
    divInputs: {
    backgroundColor: '#EFF4FF',
    height: '100%',
    width:'93%',
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly'
  },
  divNomeUsuario:{
    height: '20%',
    width:'85%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TituloNomeInfo:{
    fontSize:18,
    fontWeight: "bold",
  },
  divBotaoFinalizar:{
    height: '7%',
    width:'24%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagemBotaoEditar:{
    height: 40,
    width: 120,
  },
  TextInput:{
    width: "100%",
    fontSize: 16.5,
    borderRadius: 12,
    paddingLeft: 5,
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

  baixo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A5C4FF",
    borderRadius:10,
  },
  suasOfertas: {
    height: "100%",
    width: "34%",
    justifyContent: "center",
    alignItems: "center",
  },
  casinha: {
    paddingRight: "2%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "15%",
  },
  suasDemandas: {
    height: "100%",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  usuarioBaixo: {
    height: "100%",
    width: "16%",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoMeustrabalhos: {
    width: "100%",
    left: 18,
    fontSize: 16,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  iconeCasinha: {
    height: "73%",
    width: "70%",
  },
  botaoMeusServicos: {
    width: "100%",
    fontSize: 16.5,
    borderRadius: 12,
    paddingLeft: 5,
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
  iconeUsuario: {
    height: "55%",
    width: "60%",
  },
});

export default EditarPerfil;