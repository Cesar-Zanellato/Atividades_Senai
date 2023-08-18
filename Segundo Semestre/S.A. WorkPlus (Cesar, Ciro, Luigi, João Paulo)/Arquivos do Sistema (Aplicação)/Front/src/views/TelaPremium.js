import React, { useState, useEffect, useRef } from "react";
import {Text, Animated,View,StyleSheet,Image,TextInput,SafeAreaView,ScrollView,TouchableOpacity, Linking
} from "react-native";
{/* <text> */}
export default function TelaPremium({navigation}){
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
  <View style = {styles.viewTextoContaPremium}>
  <Text style = {styles.subtitulo}>
    Conta<Text style={{ color:'#938933', fontWeight: 'bold' }} >Premium</Text>
  </Text>
  
  </View>
  <View style = {styles.viewPropaganda}>
    <View style = {styles.propaganda}>
      <View style = {styles.propagandaCima}>
        <Text style={{ alignItems: 'center', fontSize:24 }}>Consiga <Text style={{ color:'#1D2DBF', fontWeight: 'bold' }}>notoriedade</Text></Text> 
        <Text style = {{ alignItems: 'center', fontSize:24 }}>e <Text style={{ color:'#1D2DBF', fontWeight: 'bold' }}>permanência</Text> no</Text>
        <Text style = {{ alignItems: 'center', fontSize:24 }}>topo das pesquisas</Text>
        <Text style = {{ alignItems: 'center', fontSize:24 }}>tanto de suas ofertas de</Text>
        <Text style = {{ alignItems: 'center', fontSize:24 }}><Text style={{ color:'#1D2DBF', fontWeight: 'bold' }}>trabalho</Text> quanto suas</Text>
        <Text style = {{ alignItems: 'center', fontSize:24 }}>ofertas de <Text style={{ color:'#1D2DBF', fontWeight: 'bold' }}>serviço</Text>
        </Text>
      </View>
      <View style = {styles.propagandaBaixo}>
      <View style = {styles.propagandaBaixoEsquerda}>
        <View style = {styles.viewPropagandaTitulo}>
          <Text style = {styles.textoBasico}>Básico</Text>
        </View>


        <View style = {styles.viewOfertaBasica}>
          <Text style={{ alignItems: 'center', fontSize:17 }}>
            1 <Text style={{ color:'#4553CD', fontWeight: 'bold' }}>semana</Text> de
          </Text>
             
          <Text style={{ alignItems: 'center', fontSize:17 }}>
            notoriedade
          </Text>
          <Text style={{ alignItems: 'center', fontSize:17 }}>
          em 1 Post</Text>
          <View style = {styles.viewValorEsquerdaMeio}>
          <TouchableOpacity
            onPress={() => console.log("Custom button pressed")}
          >
            <Text style={styles.botaoValorBasico}>R$9,99</Text>
          </TouchableOpacity>
          </View>
        </View>


      </View>
      <View style = {styles.Viewlinha}>
      <Image
            style={styles.linha}
            source={require("../assets/linhaVertical.png")}
          />
      </View>
      <View style = {styles.propagandaBaixoMeio}>
      <View style = {styles.viewPropagandaTitulo}>
        <Text style = {styles.textoWork}>Work</Text>
      </View>
      <View style = {styles.viewOfertaBasica}>
          <Text style={{ alignItems: 'center', fontSize:17 }}>
            1 <Text style={{ color:'#4553CD', fontWeight: 'bold' }}>mês</Text> de
          </Text>
             
          <Text style={{ alignItems: 'center', fontSize:17 }}>
            notoriedade
          </Text>
          <Text style={{ alignItems: 'center', fontSize:17, }}>
          para 5 Post's</Text>
          <View style = {styles.viewValorEsquerdaMeio}>
          <TouchableOpacity
            onPress={() => console.log("Custom button pressed")}
          >
            <Text style={styles.botaoValorBasico}>R$19,99</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style = {styles.Viewlinha}>
      <Image
            style={styles.linha}
            source={require("../assets/linhaVertical.png")}
          />
      </View>
      <View style = {styles.propagandaBaixoDireita}>
      <View style = {styles.viewPropagandaTitulo}>
          <Text style = {styles.textoWorkPlus}>WorkPlus</Text>
        </View>
        <View style = {styles.viewOfertaBasica}>
          <Text style={{ alignItems: 'center', fontSize:16 }}>
            Notoriedade</Text> 
             
          <Text style={{  color:'#4553CD', fontWeight: 'bold',fontSize:16  }}>
            permanente
          </Text>
          <Text style={{ alignItems: 'center', fontSize:16 }}>
           para todos</Text><Text style={{ alignItems: 'center', fontSize:16 }}>seus Post's</Text>
           <View style = {styles.viewValorDireita}>
           <TouchableOpacity
            onPress={() => console.log("Custom button pressed")}
          >
            <Text style={styles.botaoValorBasico}>R$49,99</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>

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
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Image
            style={{ height: 50, width: 50, right: 5}}
            source={require("../assets/usuario.png")}
          />
          </TouchableOpacity>
        </View>
  </View>

</View>

)}

const styles = StyleSheet.create({

container:{
height:'100%',
width:'100%',
//backgroundColor: 'blue'
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
viewTextoContaPremium:{
  flexDirection: "row",
  alignItems:"center",
  justifyContent:'center',
  height:'3%',
  width:'100%',
  
},
subtitulo:{
fontSize:18.5
},
viewPropaganda:{
  alignItems:"center",
  justifyContent:'center',
  flex:9,
  //backgroundColor: 'blue'
},
propaganda:{
  //backgroundColor: 'blue',
  paddingTop:'9%',
  alignItems:"center",
  height:'95%',
  width:'85%',
  borderWidth: 0.7
},
propagandaCima:{
  alignItems:"center",
  //backgroundColor: 'blue',
  height:'39%',
  width:'100%',
},
TextoIntrodutório:{
  fontSize:22,
  
},
propagandaBaixo:{
  flexDirection:'row',
  //backgroundColor: 'blue',
  height:'61%',
  width:'100%',
},
viewPropagandaTitulo:{
  marginBottom:'7%',
  marginTop:'70%',
  alignItems:'center',
  justifyContent:'center',
  height:'10%',
  width:'100%',
 
},
textoBasico:{
fontSize:25
},
textoWork:{
  fontSize:25
},
textoWorkPlus:{
  fontSize:25
},
propagandaBaixoEsquerda:{
  height:'100%',
  width:'32%',
},
viewOfertaBasica:{
  alignItems:'center',
  height:'35%',
  width:'100%',
},

propagandaBaixoMeio:{
 
  height:'100%',
  width:'32%',
},
propagandaBaixoDireita:{
  
 
  height:'100%',
  width:'32%',
},
Viewlinha:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'2%',
  paddingBottom:'10%'
},
linha:{
  height:'45%',
  width:'90%',
},
viewValorEsquerdaMeio:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginTop:'35%',
  
  height:'25%',
  width:'100%'
},
viewValorDireita:{
  alignItems:'center',
  justifyContent:'center',
  marginTop:'18.7%',
  height:'25%',
  width:'100%'
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
botaoValorBasico:{
  fontWeight: 'bold',
  color:'#4553CD',
  width: "100%",
  fontSize: 16,
  paddingLeft: 6,
  paddingRight: 6,
  borderRadius: 12,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},

})
