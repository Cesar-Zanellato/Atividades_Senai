import React, { useState, useEffect, useRef } from "react";
import {Text, Animated,View,StyleSheet,Image,TextInput,SafeAreaView,ScrollView,TouchableOpacity, Linking
} from "react-native";

const ComponenteBaixo = ({navigation}) => {
  const [text, setText] = useState('');

  const NavegacaoTrabalho = () => {
    navigation.navigate('Trabalho')
  };
  const NavegacaoHome = () => {
    navigation.navigate('Home')
  };
  const NavegacaoServico = () => {
    navigation.navigate('Servico')
  };
  const NavegacaoPerfil = () => {
    navigation.navigate('Perfil')
  };

  return (

  <View style={styles.baixo}>
    <View style={styles.suasOfertas}>
      <TouchableOpacity
        onPress={NavegacaoTrabalho}
      >
        <Text style={styles.botaoMeustrabalhos}>Meus Trabalhos</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.casinha}>
    <TouchableOpacity onPress={NavegacaoHome}>
      <Image
        style={{ width: 35, height: 40, left: 16.5 }}
        source={require("../assets/casinha.png")}
      />
      </TouchableOpacity>
    </View>
    <View style={styles.suasDemandas}>
      <TouchableOpacity onPress={NavegacaoServico}>

        <Text style={styles.botaoMeusServicos}>Meus Servicos</Text>

      </TouchableOpacity>
    </View>
    <View style={styles.usuarioBaixo}>
    <TouchableOpacity onPress={NavegacaoPerfil}>
      <Image
        style={{ height: 50, width: 50, right: 5}}
        source={require("../assets/usuario.png")}
      />
      </TouchableOpacity>
    </View>
  </View> 

    );
}

const styles = StyleSheet.create({

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
});

export default ComponenteBaixo;