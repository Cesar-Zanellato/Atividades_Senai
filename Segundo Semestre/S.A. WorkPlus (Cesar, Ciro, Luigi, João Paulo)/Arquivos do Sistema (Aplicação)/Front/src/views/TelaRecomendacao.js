import React, { useState, useEffect, useRef } from "react";
import {Text, Animated,View,StyleSheet,Image,TextInput,SafeAreaView,ScrollView,TouchableOpacity, Linking
} from "react-native";

const TelaRecomendacao = ({navigation}) => {
return(
<View style = {styles.container}>
  <View style = {styles.topo}>
    <View style = {styles.viewLogo}>
        <Image
           style={styles.logo}
          source={require("../assets/logo.png")}
        />
    </View>

    <View style = {styles.viewTitulo}>
      <Text style = {styles.titulo}>WorkPlus</Text>
    </View>
  </View> 
  <View style = {styles.viewTextoSuasRecomendaçoes}>
  <Text style = {styles.subtitulo}>
    Suas<Text style={{ color:'#1D2DBF', fontWeight: 'bold' }}> Recomendações</Text>
  </Text>
  </View>
<View  style = {styles.containerRecomendaçao} >
<SafeAreaView style = {styles.viewRecomendaçao}>
  <ScrollView>
    
  </ScrollView>
</SafeAreaView>
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
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Image
            style={{ height: 50, width: 50, right: 5}}
            source={require("../assets/usuario.png")}
          />
          </TouchableOpacity>
        </View>
      </View>



</View>
)};

const styles = StyleSheet.create({

  container:{
  height:'100%',
  width:'100%',
  },
  topo:{
    paddingTop:'10%',
    alignItems:"center",
    height:'21%',
    width:'100%',
    flexDirection: "row",
  },
  viewTitulo:{
    alignItems:"center",
    justifyContent:'center',
    height:'100%',
    width:'62%',
  
  },
  titulo:{
  fontSize:57
  },
  viewLogo:{
    alignItems:"center",
    justifyContent:'center',
    height:'100%',
    width:'35%',
   
  },
  logo:{
    height:'85%',
    width:'90%',
  },
  viewTextoSuasRecomendaçoes:{
    flexDirection: "row",
    alignItems:"center",
    paddingLeft:'5.7%',
    height:'3%',
    width:'100%',
  },
  subtitulo:{
  fontSize:20.5
  },
  viewRecomendaçao:{
    borderRadius:13,
    alignItems:"center",
    justifyContent:'center',
    height:'95%',
    width:'90%',
    backgroundColor: '#D1D3DB'
  },
  containerRecomendaçao:{
    flex:10,
    alignItems:"center",
    justifyContent:'center',
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

});

export default TelaRecomendacao