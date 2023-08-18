import React,{useState, useEffect, useRef } from 'react';
import { Text,Animated, View, StyleSheet,Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, FlatList} from 'react-native';

const Servico = ({navigation}) => {

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  const FadeInViewFundo = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity:fadeAnim
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  const [text, setText] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleShowMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const handleHideMoreInfo = () => {
    setShowMoreInfo(false);
  };

  const DATA = [
    {
      id: "1",
      title: "alguma coisa"
    },
    {
      id: "2",
      title: "alguma coisa"
    },
    {
      id: "3",
      title: "alguma coisa"
    },
  ];

  const Item = ({title}) => (
    
    <View style = {styles.post}>
    <View style = {styles.viewFoto}>
      <View style = {styles.fotoUsuario}>

      </View>
    </View>
    <View style = {styles.postMeioEsquerda}> 
    <View style = {styles.viewMeioEsquerdaCima}>
      <View style = {styles.viewSubtituloTipoServiço}>
        <Text style={styles.subtituloTipo}>Tipo de Serviço</Text>
      </View>
      <View  style = {styles.viewInfoTipoServiço}>
        <Text style={styles.tipo}>Pintura</Text>
      </View>
    </View>
    <View style = {styles.viewMeioEsquerdaMeio}>
    <View style = {styles.viewSubtituloPeriodo}>
        <Text style={styles.subtituloPeriodo}>Periodo</Text>
      </View>
      <View style = {styles.viewInfoPeriodo}>
        <Text style={styles.periodo}>Matutino</Text>
      </View>
    </View>
    <View style = {styles.viewMeioEsquerdaBaixo}>
    <View style = {styles.viewSubtituloRegiao}>
      <Text style={styles.subtituloRegiao}>Região</Text>
    </View>
    <View style = {styles.viewInfoRegiao}>
      <Text style={styles.regiao}>Florianópolis-SC</Text>
    </View>
    </View>
    </View>
    <View style={styles.viewLinha} >
    <Image
    style={styles.imagemLinha}
    source={require("../assets/linhaVertical.png")}
  />
    </View>
    <View style = {styles.postMeioDireita}> 
    <View style = {styles.viewMeioDireitaCima}>
      <View style = {styles.viewSubtituloStatus}> 
        <Text style={styles.subtituloStatusServico}>Status do Serviço</Text>
      </View> 
      <View style = {styles.viewInfoStatus}> 
        <Text style={styles.statusServico}>Ativo</Text>
      </View> 
    </View> 
    <View style = {styles.viewMeioDireitaMeio}>
      <View style = {styles.viewSubtituloVisualizacao}>  
        <Text style={styles.subtituloVisualizacoes}>Visualizações</Text>
      </View>
      <View style = {styles.viewInfoVisualizacao}>  
        <Text style={styles.visualizacoes}>8 Visualizações</Text>
      </View> 
    </View> 
    <View style = {styles.viewMeioDireitaBaixo}> 
      <View style = {styles.viewSubtituloPublicacao}> 
        <Text style={styles.subtituloDataPublicacao}>Publicação</Text>
      </View> 
      <View style = {styles.viewInfoPublicacao}> 
        <Text style={styles.dataPublicacao}>01/08/2022</Text>
      </View> 
    </View>
    </View> 
    <View style={styles.direita}>
      <View style={styles.direitaCima} >
    <Image
    style={styles.imagemEditar}
    source={require("../assets/editar.png")}
  />
  </View>
  <View style={styles.direitaBaixo}>

  
    <View>
    <TouchableOpacity onPress={handleShowMoreInfo}>
      <Image
        style={{ width: 27, height: 27 }}
        source={require("../assets/mais.png")}
      />
    </TouchableOpacity>
    
    {showMoreInfo && (
<TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
)}
</View>
  <Image
    style={styles.imagemLixeira}
    source={require("../assets/lixeira.png")}
  />
  </View>
  </View>
  </View>
  );
  

  return (
    <View style={styles.container}>
       {showMoreInfo && (
      <FadeInViewFundo style={styles.sombra}>
        
      </FadeInViewFundo>
)}
      {showMoreInfo && (
        
      <FadeInView  style={styles.DivMais}>
        <View style={styles.DentroMais}>
        <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
           <View style={styles.ViewPeriudo}>  
            </View>
        </View>
      </FadeInView >
)}
 
        <View style={styles.top}>
          <View style={styles.divLogo}>
            <Image
              style={styles.logo}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={styles.divTitulo}>
            <Text style={styles.titulo}>WorkPlus</Text>
          </View>
        </View>
        <View style={styles.viewMinhasOfertas}>
            <Text style={styles.tituloMinhasOfertas}>Meus Serviço</Text> 
            <Image
                style={styles.fitaTrabalhador}
                source={require("../assets/trabalhadorImagem.png")}
              />
        </View>
          <SafeAreaView style = {styles.containerPosts}>
            <ScrollView>

            <FlatList
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />

            <View style = {styles.viewCriarPosts}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('TelaCriarServico')}
              >
              <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../assets/mais.png")}
                />
              </TouchableOpacity>   
            </View>

            </ScrollView>
          </SafeAreaView>

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
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    position: 'relative',
    height: "100%",
    width: "100%",
    backgroundColor:'#ffffff'
  },
  top:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: 145,
    width: "100%",
    
  },
  divLogo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "45%",
  },
  divTitulo: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "55%",
    height: "100%",
  },
  logo: {
    top: "12%",
    width: 95,
    height: 95,
    left: "10%",
  },

  titulo: {
    fontSize: 45,
    top: "14%",
    right: "10%",
  },
  viewMinhasOfertas:{
    flexDirection:'row',
    height: "6%",
    width: "100%",
    paddingLeft:'3%'
    
  },
  tituloMinhasOfertas:{
    fontSize: 28,
    
  },
  fitaTrabalhador:{
    height: "85%",
    width: "9%",
    marginLeft:"4%"
  },
  containerPosts: {
    paddingTop: 5,
    flex: 11,
    justifyContent: "center",
    
  },
  viewFoto:{
    height: "100%",
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  post:{
    marginLeft: "2%",
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#81c3d7"
  },
 
  postMeioEsquerda:{
   width: "27%",
   height: "100%",
  },
  viewMeioEsquerdaCima:{
    justifyContent:'flex-end',
    width: "100%",
    height: "33.3%",
    
    
  },
  
  viewSubtituloTipoServiço:{
   
    
    width: "100%",
    height: "40%",
    
  },
  viewInfoTipoServiço:{
    
    width: "100%",
    height: "35%",
    
  },
  viewMeioEsquerdaMeio:{
   
    justifyContent:'center',
    width: "100%",
    height: "30%",
   
  },
  viewSubtituloPeriodo:{
    width: "100%",
    height: "40%",
  },
  viewInfoPeriodo:{
    width: "100%",
    height: "40%",
  },
  viewMeioEsquerdaBaixo:{
    justifyContent:'flex-start',
    width: "100%",
    height: "33.3%",
    
  },
  viewSubtituloRegiao:{
    width: "100%",
    height: "40%",
  },
  viewInfoRegiao:{
    width: "100%",
    height: "50%",
  },
  viewLinha:{
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "3%",
  },
  imagemLinha:{
    height: "100%",
    width: "60%"
  },
  postMeioDireita:{
    
   paddingLeft:'2%',
    width: "33%",
    height: "100%"
  },
  viewMeioDireitaCima:{
    justifyContent:'flex-end',
    width: "100%",
    height: "33.3%",
    
    
  },
  
  viewSubtituloStatus:{
    width: "100%",
    height: "40%",
  },
  viewInfoStatus:{
    
    width: "100%",
    height: "35%",
    
  },
  viewMeioDireitaMeio:{
   
    justifyContent:'center',
    width: "100%",
    height: "30%",
   
  },
  viewSubtituloVisualizacao:{
    width: "100%",
    height: "40%",
  },
  viewInfoVisualizacao:{
    width: "100%",
    height: "40%",
  },
  viewMeioDireitaBaixo:{
    justifyContent:'flex-start',
    width: "100%",
    height: "33.3%",
    
  },
  viewSubtituloPublicacao:{
    width: "100%",
    height: "40%",
  },
  viewInfoPublicacao:{
    width: "100%",
    height: "50%",
  },

  fotoUsuario:{
    paddingTop:15,
    width: "75%",
    height: "65%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    zIndex: 1,
  },
  subtituloTipo:{
    fontSize: 13,
   
    fontWeight: 'bold'
  },
  subtituloPeriodo:{
    fontSize: 13,
   
    //left:'27%',
    fontWeight: 'bold'
  },
  subtituloRegiao:{
    fontSize: 13,
    
    //left:'27%',
    fontWeight: 'bold'
  },
  subtituloStatusServico:{
    fontSize: 13.5,
   
    //left: '62%',
    fontWeight: 'bold'
  },
  subtituloVisualizacoes:{
    fontSize: 13,
    
    //left: '62%',
    fontWeight: 'bold'
  },
  subtituloDataPublicacao:{
    fontSize: 13,
   
    //right: '1%',
    fontWeight: 'bold'
  },
  tipo:{
    fontSize: 12.5,
    
    //left: '27%'
  },
  periodo:{
    fontSize: 12.5,
   
    //left: '27%'
  },
  regiao:{
    fontSize: 12.5,
   
    //left: '27%'
  },
  statusServico:{
    fontSize: 12.5,
    
    //left: '62%'
  },
  visualizacoes:{
    fontSize: 12.5,
   
    //left: '62%'
  },
  dataPublicacao:{
    fontSize: 12.5,
    
    //left: '62%'
  },
  direita:{
    height: "100%",
    width: "15%",
    alignItems: "center",
    
  },
  direitaCima:{
    paddingTop:'10%',
    paddingLeft:'8%',
    alignItems: "center",
   justifyContent:'center',
    height: "33.3%",
    width: "100%",
    
  },
  imagemEditar:{
    height: "64%",
    width: "45%",
  },
  direitaBaixo:{
    alignItems:'center',
    justifyContent:'space-evenly',
    
    height: "66%",
    width: "100%",
  },
  imagemLixeira:{
    height: "30%",
    width: "35%",
  },
  imagemMais: {
    height: "23%",
    width: "67%",
  },
  viewCriarPosts:{
    paddingLeft:'2%',
    height: 55,
    width: "100%",
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
  sombra: {
   
    zIndex:9,
    height: "100%",
    width: "100%",
   position:'absolute',
  backgroundColor:'black',
  opacity: 5
    
  },
  DivMais: {
    borderWidth: 0,
    zIndex:10,
    position:'absolute',
    height: "30%",
    width: "90%",
    borderRadius:20,
    backgroundColor:'#ffffff',
    
  },
});

export default Servico;