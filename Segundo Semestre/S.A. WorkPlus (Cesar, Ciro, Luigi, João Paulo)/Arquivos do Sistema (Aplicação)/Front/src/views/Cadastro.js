import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image, TextInput,Platform, TouchableOpacity,SafeAreaView,KeyboardAvoidingView, Pressable } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import api from "../api";

const Cadastro = ({ navigation }) => {
  
  const ResetandoValores = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [dtNascimento, setDTNascimento] = useState('2023-07-07');
  }
  ResetandoValores();

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [dtNascimento, setDTNascimento] = useState('2023-07-07');
  
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const toggleDatepicker =() => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type}, selectedDate) => {
    if(type == "set"){
      const currentDate = selectedDate;
      setDate (currentDate);
      if(Platform.OS === "android"){
        toggleDatepicker();
        setDTNascimento(currentDate.toLocaleDateString());
      }
    }else{
      toggleDatepicker();
    }
  };

  const onRegisterPressed = async () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
    } else {
        try {
          const data = await api.post("/user/register", {
            name: name,
            userName: userName,
            password: password,
            email: email,
            cpf: cpf,
            dtNascimento: dtNascimento
          });
          if(data.status === 200){
            console.log(data);
            alert(data.data.message);
            navigation.navigate("Login")
          } else {
            console.log(data);
          };
        } catch (error) {
          console.log(error)
        };
      };
  }

  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      <View style={styles.top}>
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

        <View style={styles.meioNomeCompleto}>
          <View style={styles.viewNomeCompleto}>
            <TextInput 
              placeholder="Nome Completo" 
              style={styles.InputNomeCompleto}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.viewImagemNomeCompleto}>
            <Image
              style={styles.imagemNomeCompleto}
              source={require('../assets/usuario.png')} />
          </View>
        </View>

        <View style={styles.meioUsuario}>
          <View style={styles.viewUsuario}>
            <TextInput 
              placeholder="Usuário" 
              style={styles.InputUsuario}
              value={userName}
              onChangeText={setUserName}
            />
          </View>
          <View style={styles.viewImagemUsuario}>
            <Image
              style={styles.imagemUsuario}
              source={require('../assets/usuario.png')} />
          </View>
        </View>

        <View style={styles.meioEmail}>
          <View style={styles.viewEmail}>
            <TextInput 
              placeholder="E-mail" 
              style={styles.InputEmail}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.viewImagemEmail}>
            <Image
              style={styles.imagemEmail}
              source={require('../assets/Email.png')} />
          </View>
        </View>

        <View style={styles.meioSenha}>
          <View style={styles.viewSenha}>
            <TextInput 
              placeholder="Senha" 
              style={styles.InputSenha}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.viewImagemSenha}>
            <Image
              style={styles.imagemSenha}
              source={require('../assets/Cadeado.png')} />
          </View>
        </View>

        <View style={styles.meioConfirmarSenha}>
          <View style={styles.viewConfirmarSenha}>
            <TextInput 
              placeholder="Confirmar Senha" 
              style={styles.InputConfirmarSenha}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.viewImagemConfirmarSenha}>
            <Image
              style={styles.imagemConfirmarSenha}
              source={require('../assets/Cadeado.png')} />
          </View>
        </View>

        <View style={styles.meioCPF}>
          <View style={styles.viewCPF}>
            <TextInput  
              placeholder="CPF" 
              style={styles.InputCPF}
              value={cpf}
              onChangeText={setCpf}
            />
          </View>
          <View style={styles.viewImagemCPF}>
            <Image
              style={styles.imagemCPF}
              source={require('../assets/Documento.png')} />
          </View>
        </View>

        <View style={styles.meioDTNascimento}>
          <View style={styles.viewDTNascimento}>

            {showPicker ? (
              <>
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange = {onChange}
              />

            <Pressable
              onPress={toggleDatepicker}
            >
              <TextInput 
                placeholder="DD/MM/AA Nascimento"
                style={styles.InputDTNascimento}
                editable={false}
                value={dtNascimento}
                onChangeText={setDTNascimento}
              />
            </Pressable>
            </>
                
            )

            :
           
            (
              <Pressable
              onPress={toggleDatepicker}
            >
              <TextInput 
                placeholder="DD/MM/AA Nascimento"
                style={styles.InputDTNascimento}
                editable={false}
                value={dtNascimento}
                onChangeText={setDTNascimento}
              >
              
             </TextInput>
            </Pressable>
            )}


          </View>
          <View style={styles.viewImagemDTNascimento}>
            <Image
              style={styles.imagemDTNascimento}
              source={require('../assets/Calendario.png')} />
          </View>
        </View>
      </View>

      <View style={styles.baixo}>

        <View style={styles.baixoBotaoEntrar}>

          <TouchableOpacity 
            onPress={onRegisterPressed}
          >
            <View style={styles.BotaoEntrar}>
              <View style={styles.viewTextoEntrar}>
                <Text style={styles.TextoEntrar}>Concluir</Text>
              </View>
              <View style={styles.viewImagemEntrar}>
                <Image
                  style={styles.imagemDuplaEngrenagem}
                  source={require('../assets/duplaEngrenagem.png')} />
              </View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.baixoBotaoEsqueceu}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textoEsqueceu}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
container: {
  width: "100%",
  height: 810,
},
top: {
  width: "100%",
  height: "30%",
},
toplogo: {
  width: "100%",
  height: "80%",
  alignItems: 'center',
  paddingTop: '10%'
},
imagemLogo: {
  width: "45%",
  height: "100%",
},
topTitulo: {
  width: "100%",
  height: "20%",
  alignItems: 'center',
},
TextoTitulo: {
  fontSize: 44
},
meio: {
  marginTop: '4%',
  width: "100%",
  height: "55%",
},
meioNomeCompleto: {
  width: "100%",
  height: "14.28%",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
meioUsuario: {
  width: "100%",
  height: "14.28%",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
meioEmail: {
  width: "100%",
  height: "14.28%",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
meioSenha: {
  width: "100%",
  height: "14.28%",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
meioConfirmarSenha: {
  width: "100%",
  height: "14.28%",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
meioCPF: {
  width: "100%",
  height: "14.28%",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
meioDTNascimento: {
  width: "100%",
  height: "14.28%",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
viewNomeCompleto: {
  width: "60%",
  height: "100%",
},
viewImagemNomeCompleto: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3%',
  height: "80%",
  width: "12%",
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  marginBottom: '6.9%',
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
imagemNomeCompleto: {
  width: "80%",
  height: "100%",
},
InputNomeCompleto: {
  width: "100%",
  fontSize: 19,
  borderRadius: 5,
  borderBottomRightRadius: 0,
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
viewUsuario: {
  width: "60%",
  height: "100%",
},
viewImagemUsuario: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3%',
  height: "80%",
  width: "12%",
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  marginBottom: '6.9%',
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
imagemUsuario: {
  width: "80%",
  height: "100%",
},
InputUsuario: {
  width: "100%",
  fontSize: 19,
  borderRadius: 5,
  borderBottomRightRadius: 0,
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
viewEmail: {
  width: "60%",
  height: "100%",
},
viewImagemEmail: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3%',
  height: "80%",
  width: "12%",
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  marginBottom: '6.9%',
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
imagemEmail: {
  marginLeft:'1.5%',
  width: "82%",
  height: "100%",
},
InputEmail: {
  width: "100%",
  fontSize: 19,
  borderRadius: 5,
  borderBottomRightRadius: 0,
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
viewSenha: {
  width: "60%",
  height: "100%",
},
viewImagemSenha: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3%',
  height: "80%",
  width: "12%",
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  marginBottom: '6.9%',
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
imagemSenha: {
  width: "80%",
  height: "100%",
},
InputSenha: {
  width: "100%",
  fontSize: 19,
  borderRadius: 5,
  borderBottomRightRadius: 0,
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
viewConfirmarSenha: {
  width: "60%",
  height: "100%",
},
viewImagemConfirmarSenha: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3%',
  height: "80%",
  width: "12%",
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  marginBottom: '6.9%',
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
imagemConfirmarSenha: {
  width: "80%",
  height: "100%",
},
InputConfirmarSenha: {
  width: "100%",
  fontSize: 19,
  borderRadius: 5,
  borderBottomRightRadius: 0,
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
viewCPF: {
  width: "60%",
  height: "100%",
},
viewImagemCPF: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3%',
  height: "80%",
  width: "12%",
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  marginBottom: '6.9%',
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
imagemCPF: {
  width: "90%",
  height: "67%",
},
InputCPF: {
  width: "100%",
  fontSize: 19,
  borderRadius: 5,
  borderBottomRightRadius: 0,
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
viewDTNascimento: {
  width: "60%",
  height: "100%",
},
viewImagemDTNascimento: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3%',
  height: "80%",
  width: "12%",
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  marginBottom: '6.9%',
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
imagemDTNascimento: {
  width: "70%",
  height: "90%",
},
InputDTNascimento: {
  width: "100%",
  fontSize: 19,
  borderRadius: 5,
  borderBottomRightRadius: 0,
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
baixo: {
  width: "100%",
  height: "14%",
},
baixoBotaoEntrar: {
  marginTop: '5%',
  marginBottom: '1%',
  width: "100%",
  height: "17%",
  justifyContent: 'center',
  alignItems: 'center'
},
BotaoEntrar: {
  flexDirection: 'row',
  width: "30%",
  height: 35,
  backgroundColor: '#13387D',
  borderRadius: 5,
},
viewTextoEntrar: {
  width: "80%",
  height: "100%",
  alignItems: 'center',
},
TextoEntrar: {
  fontSize: 25,
  color: 'white',
},
viewImagemEntrar: {
  paddingTop: '3%',
  width: "20%",
  height: "100%",
},
imagemDuplaEngrenagem: {
  width: "100%",
  height: "80%",
},
baixoBotaoEsqueceu: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1%',
  width: "100%",
  height: "35%",
},
textoEsqueceu: {
  fontSize: 26,
  color: 'blue',
},
});

export default Cadastro