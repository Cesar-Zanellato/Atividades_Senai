import React, { useState } from "react";
import { Text, KeyboardAvoidingView, View, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Linking, Pressable } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import api from "../api";

const TelaCriarServico = ({navigation}) => {

  const ResetandoValores = () => {
    const [tipoServico, setTipoServico] = useState('');
    const [regiao, setRegiao] = useState('');
    const [dtDisponivel, setDTDisponivel] = useState('2023-07-07');
    const [periodoMatutino, setPeriodoMatutino] = useState(false);
    const [periodoVespertino, setPeriodoVespertino] = useState(false);
    const [periodoNoturno, setPeriodoNoturno] = useState(false);
    const [linkWhats, setLinkWhats] = useState('');
    const [descricao, setDescricao] = useState('');
  }
  ResetandoValores();
  
  const [tipoServico, setTipoServico] = useState('');
  const [regiao, setRegiao] = useState('');
  const [dtDisponivel, setDTDisponivel] = useState('2023-07-07');
  const [periodoMatutino, setPeriodoMatutino] = useState(false);
  const [periodoVespertino, setPeriodoVespertino] = useState(false);
  const [periodoNoturno, setPeriodoNoturno] = useState(false);
  const [linkWhats, setLinkWhats] = useState('');
  const [descricao, setDescricao] = useState('');

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
        setDTDisponivel(currentDate.toLocaleDateString());
      }
    }else{
      toggleDatepicker();
    }
  };

  const escolhaPeriodoMatutino = () => {
    setPeriodoMatutino(!periodoMatutino);
  };
  const escolhaPeriodoVespertino = () => {
    setPeriodoVespertino(!periodoVespertino);
  };
  const escolhaPeriodoNoturno = () => {
    setPeriodoNoturno(!periodoNoturno);
  };

  const handleDescricaoChange = (text) => {
    if (text.length <= 255) {
      setDescricao(text);
    }
  };

  const onRegisterPressed = async () => {
    
        try {
          const data = await api.post("/postServico/register", {
            tipoServico: tipoServico,
            regiao: regiao,
            dtDisponivel: dtDisponivel,
            periodoMatutino: periodoMatutino,
            periodoVespertino: periodoVespertino,
            periodoNoturno: periodoNoturno,
            linkWhats: linkWhats,
            descricao: descricao

          });
          if(data.status === 200){
            console.log(data);
            alert(data.data.message);
            navigation.navigate("Servico")
          } else {
            console.log(data);
          };
        } catch (error) {
          console.log(error)
        };
      
  }

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

  <View style = {styles.containerCriação}>
    <View style = {styles.viewCriarPostTrabalho}>
      <View style = {styles.viewMaior}>
        <View style = {styles.viewTipoTrabalho}>
        <Text style = {styles.BaseTipoDeTrabalho}>Tipo de Serviço</Text>
        </View>

        <View style = {styles.viewImputTipoTrabalho}>
          <TextInput 
            multiline style = {styles.BaseImputTipoDeTrabalho}
            value={tipoServico}
            onChangeText={setTipoServico}
            >
          </TextInput>
        </View>
        <View style = {styles.viewImagemTipoTrabalho}>
        <Image
            style={styles.ImagemEngrenagemTipo}
            source={require("../assets/engrenagem.png")}
          />
        </View>
        
      </View>
      <View style = {styles.viewMaior}>
        <View style = {styles.viewEndereço}>
        <Text style = {styles.BaseEndereço}>Região de Atuação</Text>
        </View>
        <View style = {styles.viewImputEndereço}>
          <TextInput 
            multiline style = {styles.BaseImputEndereço}
            value={regiao}
            onChangeText={setRegiao}
          >
          </TextInput>
        </View>
        <View style = {styles.viewImagemLocalização}>
        <Image
            style={styles.ImagemLozalização}
            source={require("../assets/Localizacao.png")}
          />
        </View>
      </View>

      {/* luigi */}
      <View style = {styles.viewForaMenor}>
        <View style = {styles.viewMenor}>
        <View style = {styles.viewData}>
        <Text style = {styles.BaseData}>Data de Início</Text>
        </View>
        <View style={styles.viewImputData}>
                <View style={styles.BaseImputData}>
                  {showPicker ? (
                    <>

                      <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={date}
                        onChange={onChange}
                        style={{ backgroundColor: 'blue' }}
                      />

                      <Pressable
                        onPress={toggleDatepicker}
                      >
                        <TextInput
                          placeholder="DD/MM/AA"
                          style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}
                          editable={false}
                          value={dtDisponivel}
                          onChangeText={setDTDisponivel}
                        >

                        </TextInput>
                      </Pressable>
                    </>

                  )

                    :

                    (
                      <Pressable
                        onPress={toggleDatepicker}
                      >
                        <TextInput
                          placeholder="DD/MM/AA"
                          style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}
                          editable={false}
                          value={dtDisponivel}
                          onChangeText={setDTDisponivel}
                        >

                        </TextInput>
                      </Pressable>
                    )}
                </View>
              </View>
        <View style = {styles.viewImagemData}>
        <Image
            style={styles.ImagemData}
            source={require("../assets/Calendario.png")}
          />
        </View>
        </View>
      </View>


      <View style = {styles.viewMaior}>
        <View style = {styles.viewPeriodo}>
        <Text style = {styles.BasePeriodo}>Período</Text>
        </View>
        <View style = {styles.viewTodosPeriodos}>
         <View style = {styles.viewMatutino}>
            <TouchableOpacity onPress={escolhaPeriodoMatutino}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 6,
                    borderColor: periodoMatutino ? '#082253' : 'white',
                    marginRight: 2,
                  }}
                />
                <Text style={{ fontWeight: 'bold' }}>Matutino</Text>
              </View>
            </TouchableOpacity>
         </View>

          <View style = {styles.viewVespertino}>
            <TouchableOpacity onPress={escolhaPeriodoVespertino}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 6,
                    borderColor: periodoVespertino ? '#082253' : 'white',
                    marginRight: 2,
                  }}
                />
                <Text style={{ fontWeight: 'bold' }}>Vespertino</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style = {styles.viewNoturno}>
            <TouchableOpacity onPress={escolhaPeriodoNoturno}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 6,
                    borderColor: periodoNoturno ? '#082253' : 'white',
                    marginRight: 2,
                  }}
                />
                <Text style={{ fontWeight: 'bold' }}>Noturno</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style = {styles.viewMaiorWhats}>
      <View style = {styles.viewWhats}>
        <Text style = {styles.BaseWhats}>WhatsApp</Text>
        </View>
        <View style = {styles.viewImputWhats}>
          <TextInput 
            multiline style = {styles.BaseImputWhats}
            value={linkWhats}
            onChangeText={setLinkWhats}
            >
          </TextInput>
        </View>
        <View style = {styles.viewImagemWhats}>
        <Image
            style={styles.ImagemWhats}
            source={require("../assets/whats.png")}
          />
        </View>
      </View>

      <View style = {styles.viewTextoDescrição}>
        <Text style = {styles.TextoDescrição}>Descrição</Text>
      </View>
      <KeyboardAvoidingView style = {styles.viewDescrição} behavior="padding" >
        <View>
          <TextInput
            style={{ fontSize:18 }}
            multiline
            maxLength={255}
            value={descricao}
            onChangeText={handleDescricaoChange}
          />
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity
        onPress={onRegisterPressed}
      >
      <View style = {styles.ViewBotaoConfirmar}>
        <View style = {styles.BotaoConfirmarTrabalho}>

          <View style = {styles.viewTextoConcluir}>
            <Text style = {styles.textoConcluir}>Concluir</Text>
          </View>
          
              <View style = {styles.viewImagemConcluir}>
                <Image
                  style={styles.ImagemEngrenagem}
                  source={require("../assets/duplaEngrenagem.png")}
                />
              </View>
          <View>

          </View>
        </View>
      </View>
      </TouchableOpacity>

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
height:800,
width:'100%',
//backgroundColor: 'blue'
},
topo:{
  paddingLeft:'5%',
  paddingTop:'10%',
  alignItems:"center",
 
  height:'18%',
  width:'100%',
  flexDirection: "row",
  //backgroundColor: 'red'
},
viewTitulo:{
  alignItems:"center",
  justifyContent:'center',
  height:'100%',
  width:'60%',
  //backgroundColor: 'red'

},
titulo:{
fontSize:50
},
viewLogo:{
  alignItems:"center",
  justifyContent:'center',
  height:'100%',
  width:'31%',
 // backgroundColor: 'blue'
 
},
logo:{
  height:'77%',
  width:'77%',
},
containerCriação:{
flex:12,
justifyContent:'center',
alignItems:'center',
},
viewCriarPostTrabalho:{
  paddingTop:'3%',
  height:'100%',
  width:'100%',
  alignItems:'center',
},
viewMaior:{
  flexDirection:'row',
  marginBottom:'3%',
  borderRadius: 7,
  height:'7%',
  width:'90%',
  backgroundColor: '#AECAFF',
  opacity: 0.5
},
viewMaiorWhats:{
  flexDirection:'row',
  marginBottom:'0%',
  borderRadius: 7,
  height:'7%',
  width:'90%',
  backgroundColor: '#AECAFF',
  opacity: 0.5
},
viewForaMenor:{
  marginBottom:'3%',
  height:'7%',
  width:'100%',
},
viewMenor:{
  flexDirection:'row',
  marginLeft:'5%',
  marginBottom:'5%',
  borderRadius: 7,
  height:'100%',
  width:'68%',
  backgroundColor: '#AECAFF',
  opacity: 0.5
},
viewTextoDescrição:{
  paddingLeft:'6%',
  justifyContent:'center',
  width:'100%',
  height:'5%',
  //backgroundColor:'blue'
},
TextoDescrição:{
fontSize:17,
fontWeight: 'bold'
},
viewDescrição:{
  fontSize:44,
  paddingLeft:'3%',
  paddingRight:'3%',
  paddingBottom:'4%',
  paddingTop:'2%',
  marginBottom:'1%',
  borderRadius: 7,
  width:'90%',
  height:'25%',
  backgroundColor: '#AECAFF',
  opacity: 0.5
},
viewTipoTrabalho:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'43%',
  //backgroundColor:'blue'
},
viewImputTipoTrabalho:{
  paddingBottom:'0.77%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'48%',
  //backgroundColor:'blue'
},
viewImagemTipoTrabalho:{
  alignItems:'center',
  justifyContent:'center',
  height:'95%',
  width:'9%',
  //backgroundColor: 'blue'
},
ImagemEngrenagemTipo:{
  height:'100%',
  width:'100%',
},
BaseTipoDeTrabalho: {
  fontWeight: 'bold',
  width: "85%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputTipoDeTrabalho: {
  fontWeight: 'bold',
  width: "99%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
viewImagemLocalização:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'10%',
  //backgroundColor:'red',
},
viewEndereço:{
  //backgroundColor:'red',
  paddingLeft:'1.5%',
  justifyContent:'center',
  height:'100%',
  width:'45%',
  
},
viewEndereçoServiço:{
  //backgroundColor:'red',
  paddingLeft:'1.5%',
  justifyContent:'center',
  height:'100%',
  width:'39%',
},
viewImputEndereço:{
  //backgroundColor: 'blue',
  paddingBottom:'0.77%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'46.5%',
},
viewImagemEndereço:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'10%',
 // backgroundColor: 'blue'
},
BaseEndereço: {
  fontWeight: 'bold',
  width: "97%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 6,
  paddingRight: 1,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputEndereço: {
  fontWeight: 'bold',
  width: "99%",
  fontSize: 15.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
ImagemLozalização:{
  height:'80%',
  width:'57%',
},
viewData:{
  paddingLeft:'1.5%',
  justifyContent:'center',
  height:'100%',
  width:'48%',
},
viewImputData:{
  paddingBottom:'0.77%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'38%',
},
viewImagemData:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'15%',
  
},
BaseData: {
  fontWeight: 'bold',
  width: "95%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputData: {
  fontWeight: 'bold',
  width: "96%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
ImagemData:{
  height:'76%',
  width:'69%',
},
viewPeriodo:{
  //backgroundColor:'grey',
  paddingLeft:'1.5%',
  justifyContent:'center',
  height:'100%',
  width:'24%',
},
BasePeriodo: {
  fontWeight: 'bold',
  width: "95%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
viewTodosPeriodos:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  height:'100%',
  width:'76%',
},
viewMatutino:{
  alignItems:'center',
  justifyContent:'center',
  //backgroundColor:'blue',
  height:'100%',
  width:'32%',
},
viewVespertino:{
  alignItems:'center',
  justifyContent:'center',
  //backgroundColor:'blue',
  height:'100%',
  width:'36%',
},
viewNoturno:{
  alignItems:'center',
  justifyContent:'center',
 // backgroundColor:'blue',
  height:'100%',
  width:'32%',
},
viewWhats:{
  //backgroundColor:'red',
  paddingLeft:'1.5%',
  justifyContent:'center',
  height:'100%',
  width:'30%',
  
},
viewImputWhats:{
  //backgroundColor: 'blue',
  paddingBottom:'0.77%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'59%',
},
viewImagemWhats:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'10%',
 // backgroundColor: 'blue'
},
BaseWhats: {
  fontWeight: 'bold',
  width: "95%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputWhats: {
  fontWeight: 'bold',
  width: "96%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
ImagemWhats:{
  height:'72%',
  width:'83%',
},
ViewBotaoConfirmar:{
    
  paddingTop:'9%',
  alignItems:'center',
  justifyContent:'center',
//backgroundColor:'blue',
width:400,
height:115
},
BotaoConfirmarTrabalho:{
    flexDirection:'row',
    backgroundColor:'#13387D',
    width:'33%',
    height:'45%',
borderRadius:10
},
viewTextoConcluir:{
    alignItems:'center',
  justifyContent:'center',
  //backgroundColor:'blue',
  width:'78%',
  height:'100%',
},
textoConcluir:{
fontSize:21,
color:'white'
},
viewImagemConcluir:{
  alignItems:'center',
  justifyContent:'center',
  //backgroundColor:'red',
  width:'22%',
  height:'100%',
},
ImagemEngrenagemTipo:{
  width:'80%',
  height:'73%',
},
ImagemEngrenagem:{
  width:'80%',
  height:'67%',
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

export default TelaCriarServico;