import React, { useState, useEffect, useRef } from "react";
import {
  Text, Animated, View, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Linking, FlatList
} from "react-native";

const Perfil = ({ navigation }) => {

  const [name, setName] = useState("Luigi Bernado dos Santos");
  const [userName, setUserName] = useState('Luigi dos Santos');
  const [email, setEmail] = useState('luigisantostk@gmail.com');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('Rua Ilha da Gralha Azul, 35')
  const [dtNascimento, setDTNascimento] = useState('2004-01-30');

  const [nameServico, setNameServico] = useState('Cesar Glufke')
  const [tipoServico, setTipoServico] = useState('Pintor');
  const [regiao, setRegiao] = useState('Floripa');
  const [dtDisponivel, setDTDisponivel] = useState('2023-07-07');
  const [periodoMatutino, setPeriodoMatutino] = useState(true);
  const [periodoVespertino, setPeriodoVespertino] = useState(false);
  const [periodoNoturno, setPeriodoNoturno] = useState(false);
  const [linkWhats, setLinkWhats] = useState('48 988645111');
  const [descricao, setDescricao] = useState('Alguma coisa');

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
    //sla
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
          opacity: fadeAnim
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleShowMoreInfo = () => {
    setShowMoreInfo(true);

  };
  const navegacaoLogout = () =>{
    setShowMoreInfo(false);
    navigation.navigate('Login');
  };
  const navegacaoPremium = () =>{
    setShowMoreInfo(false);
    navigation.navigate('TelaPremium');
  };

  const handleHideMoreInfo = () => {
    setShowMoreInfo(false);
  };
  const [text, setText] = useState("");
  const handleTextChange = (newText) => {
    if (newText.length <= 100) {
      setText(newText);
    }
  };
  const handlePress = () => {
    Linking.openURL(url);
  };
  const [viewIndex, setViewIndex] = useState(1); // estado inicial é a view 1

  const handleButtonPress = (index) => {
    setViewIndex(index); // atualiza o estado com o index do botão pressionado
  };
  const whats = require('../assets/whats.png');
  const url = 'https://api.whatsapp.com/send?phone=5551984574910&text=penis';

  const DATAUsuarioPremiumTrabalho = [
    {
      id: '1',
    },
  ];

  const DATAUsuarioPremiumServico = [
    {
      id: '1',
    },
    
  ];

  const DATAUsuarioTrabalho = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];
  
  const DATAUsuarioServico = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  // Não estão completos
  // const PostPremiumTrabalho = ({title}) => (

  //   <View style={styles.postPremiumTrabalhador}>
       
  //           <View style={styles.DivFotoUsuario}>
  //           <Image
  //               style={styles.fitaPremium}
  //               source={require("../assets/fitaPremium.png")}
  //             />
  //             <Image
  //               style={styles.fitaPremiumTrabalhador}
  //               source={require("../assets/fitaTrabalhador.png")}
  //             />
  //             <View style={styles.fotoUsuario}></View>
  //           </View>
  //         <View style={styles.Meio}>
            
  //           <View style={styles.MeioEsquerda}>
  //             <View style={styles.MeioEsquerdaCima}>
  //               <Text style={styles.subtituloNome}>Nome</Text>
  //               <Text style={styles.nome}>Luigi dos Santos</Text>
  //             </View>

  //             <View style={styles.MeioEsquerdaBaixo}>
  //               <Text style={styles.subtituloTipo}>Tipo</Text>
  //               <Text style={styles.tipo}>Marceneiro</Text>
  //             </View>
  //           </View>

  //           <View style={styles.MeioDireta}>
  //             <View style={styles.MeioDireitaCima}>
  //               <Text style={styles.subtituloData}>Data</Text>
  //               <Text style={styles.data}>27/04/2023</Text>
  //             </View>

  //             <View style={styles.MeioDireitaBaixo}>
  //               <Text style={styles.subtituloEndereco}>Endereço</Text>
  //               <Text style={styles.endereco}>Cachoeirinha-RS</Text>
  //             </View>
  //           </View>
  //           </View>
  //           <View style={styles.Direita}>
             
  //             <TouchableOpacity onPress={handlePress}>
  //             <Image source={whats} style={{ width: 30, height: 30 }} />
  //             </TouchableOpacity>
  //             <View>
  //             <TouchableOpacity onPress={handleShowMoreInfo}>
  //               <Image
  //                 style={{ width: 30, height: 30 }}
  //                 source={require("../assets/mais.png")}
  //               />
  //             </TouchableOpacity>
              
  //             {showMoreInfo && (
  //       <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
  //     )}
  //   </View>
  //             <Image
  //               style={styles.usuario}
  //               source={require("../assets/usuario.png")}
  //             />
  //           </View>
  //         </View>
  // );

  // const PostPremiumServico = ({title}) => (

  //   <View style={styles.postPremiumEmpregador}>
  //           <View style={styles.DivFotoUsuario}>
  //           <Image
  //               style={styles.fitaPremium}
  //               source={require("../assets/fitaPremium.png")}
  //             />
  //             <Image
  //               style={styles.fitaPremiumEmpregador}
  //               source={require("../assets/fitaEmpregador.png")}
  //             />
  //             <View style={styles.fotoUsuario}></View>
  //           </View>
  //         <View style={styles.Meio}>
            
  //           <View style={styles.MeioEsquerda}>
  //             <View style={styles.MeioEsquerdaCima}>
  //               <Text style={styles.subtituloNome}>Nome</Text>
  //               <Text style={styles.nome}>Luigi dos Santos</Text>
  //             </View>

  //             <View style={styles.MeioEsquerdaBaixo}>
  //               <Text style={styles.subtituloTipo}>Tipo</Text>
  //               <Text style={styles.tipo}>Marceneiro</Text>
  //             </View>
  //           </View>

  //           <View style={styles.MeioDireta}>
  //             <View style={styles.MeioDireitaCima}>
  //               <Text style={styles.subtituloData}>Data</Text>
  //               <Text style={styles.data}>27/04/2023</Text>
  //             </View>

  //             <View style={styles.MeioDireitaBaixo}>
  //               <Text style={styles.subtituloEndereco}>Endereço</Text>
  //               <Text style={styles.endereco}>Cachoeirinha-RS</Text>
  //             </View>
  //           </View>
  //           </View>
  //           <View style={styles.Direita}>
             
  //             <TouchableOpacity onPress={handlePress}>
  //             <Image source={whats} style={{ width: 30, height: 30 }} />
  //             </TouchableOpacity>



  //             <View>
  //             <TouchableOpacity onPress={handleShowMoreInfo}>
  //               <Image
  //                 style={{ width: 30, height: 30 }}
  //                 source={require("../assets/mais.png")}
  //               />
  //             </TouchableOpacity>
              
  //             {showMoreInfo && (
  //       <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
  //     )}
  //   </View>
  //             <Image
  //               style={styles.usuario}
  //               source={require("../assets/usuario.png")}
  //             />
  //           </View>
  //         </View>
  // );

  const PostTrabalho = ({title}) => (
    
    <View style={styles.postTrabalhador}>

                <View style={styles.DivFotoUsuario}>
                  <Image
                    style={styles.fitaTrabalhador}
                    source={require("../assets/fitaTrabalhador.png")}
                  />
                  <View style={styles.fotoUsuario}></View>
                </View>
                <View style={styles.Meio}>

                  <View style={styles.MeioEsquerda}>
                    <View style={styles.MeioEsquerdaCima}>
                      <Text style={styles.subtituloNome}>Nome</Text>
                      <Text style={styles.nome}>Luigi dos Santos</Text>
                    </View>

                    <View style={styles.MeioEsquerdaBaixo}>
                      <Text style={styles.subtituloTipo}>Tipo</Text>
                      <Text style={styles.tipo}>Marceneiro</Text>
                    </View>
                  </View>

                  <View style={styles.MeioDireta}>
                    <View style={styles.MeioDireitaCima}>
                      <Text style={styles.subtituloData}>Data</Text>
                      <Text style={styles.data}>27/04/2023</Text>
                    </View>

                    <View style={styles.MeioDireitaBaixo}>
                      <Text style={styles.subtituloEndereco}>Endereço</Text>
                      <Text style={styles.endereco}>Cachoeirinha-RS</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.Direita}>

                  <TouchableOpacity onPress={handlePress}>
                    <Image source={whats} style={{ width: 30, height: 30 }} />
                  </TouchableOpacity>



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
                  <Image
                    style={styles.usuario}
                    source={require("../assets/usuario.png")}
                  />
                </View>
              </View>
  );

  const PostServico = ({title}) => (

    <View style={styles.postEmpregador}>
                <View style={styles.DivFotoUsuario}>
                  <Image
                    style={styles.fitaEmpregador}
                    source={require("../assets/fitaEmpregador.png")}
                  />
                  <View style={styles.fotoUsuario}></View>
                </View>
                <View style={styles.Meio}>

                  <View style={styles.MeioEsquerda}>
                    <View style={styles.MeioEsquerdaCima}>
                      <Text style={styles.subtituloNome}>Nome</Text>
                      <TextInput 
                        style={styles.nome}
                        value={nameServico}
                        onChangeText={setNameServico}
                        editable={false}
                      />
                    </View>

                    <View style={styles.MeioEsquerdaBaixo}>
                      <Text style={styles.subtituloTipo}>Tipo</Text>
                      <TextInput
                        style={styles.tipo}
                        value={tipoServico}
                        onChangeText={setTipoServico}
                        editable={false}
                      />
                    </View>
                  </View>

                  <View style={styles.MeioDireta}>
                    <View style={styles.MeioDireitaCima}>
                      <Text style={styles.subtituloData}>Data</Text>
                      <TextInput 
                        style={styles.data}
                        value={dtDisponivel}
                        onChangeText={setDTDisponivel}
                        editable={false}
                      />
                    </View>

                    <View style={styles.MeioDireitaBaixo}>
                      <Text style={styles.subtituloEndereco}>Endereço</Text>
                      <TextInput 
                        style={styles.endereco}
                        value={endereco}
                        onChangeText={setEndereco}
                        editable={false}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.Direita}>

                  <TouchableOpacity onPress={handlePress}>
                    <Image source={whats} style={{ width: 30, height: 30 }} />
                  </TouchableOpacity>



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
                  <Image
                    style={styles.usuario}
                    source={require("../assets/usuario.png")}
                  />
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

        <View style={styles.DivMais}>
          <View style={styles.viewLogout}>
            <TouchableOpacity style={styles.textLogout} onPress={navegacaoLogout}>
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
            <View style={styles.viewImagemLogout}>
            <Image
              style={styles.ImagemLogout}
              source={require("../assets/Logout.png")}
             />

            </View>
          </View>
          <View style={styles.viewPremium}>
            <TouchableOpacity style={styles.textPremium} onPress={navegacaoPremium}>
              <Text style={styles.Premium}>Premium</Text>
            </TouchableOpacity>
            <View style={styles.viewImagemPremium}>
            <Image
          style={styles.ImagemPremium}
          source={require("../assets/Premium.png")}
        />
            </View>
          </View>

          {showMoreInfo && (
            <View>
              <TouchableOpacity onPress={handleHideMoreInfo}>
                <View>
                <Text style={styles.voltar} >Voltar</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View >
      )}


      <View style={styles.Top}>


        <View style={styles.TopFotoBotao}>
          <View style={styles.FotoUsuario}>

          </View>
          <View style={styles.viewBotaoEditar}>
            <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}>
              <Image
                style={styles.BotaoEditar}
                source={require("../assets/botaoEditar.png")}

              />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.TopNome}>
          <TextInput 
            style={styles.NomeUsuario}
            value={userName}
            onChangeText={setUserName}
            editable={false}
          />
        </View>


      </View>

      <View style={styles.Viewlinha}>
        <Image
          style={styles.ImagemLinha}
          source={require("../assets/linhaHorizontal.png")}
        />
      </View>

      <View style={styles.viewBotoesNavegacao}>

        <View style={styles.viewBotaoServico}>
          <TouchableOpacity onPress={() => handleButtonPress(2)}
          >
            <Text style={styles.BotaoServicos}>Serviços</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.viewBotaoInfo} >
          <TouchableOpacity onPress={() => handleButtonPress(1)}>
            <Image
              style={styles.ImagemUsuario}
              source={require("../assets/usuario.png")}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.viewBotaoTrabalho}>
          <TouchableOpacity onPress={() => handleButtonPress(3)}
          >
            <Text style={styles.BotaoTrabalho}>Trabalhos</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.containerOpcoes}>
        {viewIndex === 1 && (

          <View style={styles.ViewInfo}>
            <View style={styles.viewTextoNome}>
              <Text style={styles.TituloNomeInfo} >Nome</Text>
            </View>
            <View style={styles.ViewNomeInfo}>
              <TextInput 
                style={styles.NomeInfo} 
                value={name}
                onChangeText={setName}
                editable={false}
              />
            </View>

            <View style={styles.viewTextoNome}>
              <Text style={styles.TituloNomeInfo} >Email</Text>
            </View>
            <View style={styles.ViewNomeInfo}>
              <TextInput 
                style={styles.NomeInfo} 
                value={email}
                onChangeText={setEmail}
                editable={false}
              />
            </View>

            <View style={styles.viewTextoNome}>
              <Text style={styles.TituloNomeInfo} >Endereço</Text>
            </View>
            <View style={styles.ViewNomeInfo}>
              <TextInput 
                style={styles.NomeInfo} 
                value={endereco}
                onChangeText={setEndereco}
                editable={false}
              />
            </View>

            <View style={styles.viewTextoNome}>
              <Text style={styles.TituloNomeInfo} >Data de Nascimento</Text>
            </View>
            <View style={styles.ViewNomeInfo}>
              <TextInput 
                style={styles.NomeInfo} 
                value={dtNascimento}
                onChangeText={setDTNascimento}
                editable={false}
              />
            </View>
          </View>
        )}
        {viewIndex === 2 && (

          <SafeAreaView style={styles.ViewServicos}>
            <ScrollView>
              
            {/* <FlatList
              data={DATAUsuarioPremiumServico}
              renderItem={({item}) => <PostPremiumServico title={item.title} />}
              keyExtractor={item => item.id}
            /> */}

            <FlatList
              data={DATAUsuarioServico}
              renderItem={({item}) => <PostServico title={item.title} />}
              keyExtractor={item => item.id}
            />

            </ScrollView>
          </SafeAreaView>
        )}
        {viewIndex === 3 && (

          <SafeAreaView style={styles.ViewTrabalhos}>
            <ScrollView>

            {/* <FlatList
              data={DATAUsuarioPremiumTrabalho}
              renderItem={({item}) => <PostPremiumTrabalho title={item.title} />}
              keyExtractor={item => item.id}
            /> */}

            <FlatList
              data={DATAUsuarioTrabalho}
              renderItem={({item}) => <PostTrabalho title={item.title} />}
              keyExtractor={item => item.id}
            />
              
            </ScrollView>
          </SafeAreaView>
        )}


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
          <TouchableOpacity onPress={handleShowMoreInfo}>
            <Image
              style={{ height: 28, width: 40, right: 5 }}
              source={require("../assets/menu.png")}
            />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  Top: {
    paddingTop: "14%",
    height: "28%",
    width: "100%",

  },

  TopFotoBotao: {
    paddingLeft: '34%',
    flexDirection: 'row',
    height: "75%",
    width: "100%",

  },
  TopNome: {
    paddingLeft: "2%",
    alignItems: 'center',
    justifyContent: 'center',
    height: "25%",
    width: "100%",

  },
  NomeUsuario: {
    fontSize: 24
  },
  FotoUsuario: {
    borderRadius: 100,
    height: "100%",
    width: "50%",
    backgroundColor: '#B6BFD0',

  },
  BotaoEditar: {

    height: 25,
    width: 75
    //height: "20%",
    //width: "31%",
  },
  viewBotaoEditar: {
    marginTop: "40%",
    height: "20%",
  },
  Viewlinha: {
    alignItems: 'center',
    justifyContent: 'center',

    height: "2%",
    width: "100%",
  },
  ImagemLinha: {
    height: "40%",
    width: "98%",
  },
  viewBotoesNavegacao: {
    flexDirection: 'row',
    height: "7%",
    width: "100%",

  },
  viewBotaoServico: {
    paddingLeft: "3%",
    height: "100%",
    width: "33.3%",
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewBotaoInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "33.4%",
    paddingLeft: "1%",
  },
  viewBotaoTrabalho: {

    height: "100%",
    width: "33.3%",
    alignItems: 'center',
    justifyContent: 'center',

  },
  BotaoServicos: {
    width: "100%",
    fontSize: 20.5,
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
  BotaoTrabalho: {
    width: "100%",
    fontSize: 20.5,
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
  ImagemUsuario: {
    height: 55,
    width: 55
  },
  containerOpcoes: {
    alignItems: 'center',
    paddingTop: "3%",
    flex: 9,
    width: "100%",


  },
  ViewInfo: {

    paddingTop: '5%',
    borderRadius: 10,
    height: "97%",
    width: "95%",
    backgroundColor: '#EFF4FF'
  },
  viewTextoNome: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "5%",
    width: "100%",

  },
  TituloNomeInfo: {
    fontSize: 18,
    fontWeight: "bold",

  },
  ViewNomeInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "7%",
    width: "100%",
    marginBottom: '12%'

  },
  NomeInfo: {

    fontSize: 20.5,
    paddingTop: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 6,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  ViewServicos: {
    paddingTop: '2%',
    borderRadius: 10,
    height: "95%",
    width: "95%",
    backgroundColor: '#EFF4FF'
  },
  ViewTrabalhos: {
    paddingTop: '2%',
    borderRadius: 10,
    height: "95%",
    width: "95%",
    backgroundColor: '#EFF4FF'
  },
  postEmpregador: {
    marginLeft: "2%",
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#81c3d7"
  },
  postTrabalhador: {
    marginLeft: "2%",
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#81c3d7"
  },
  postEmpregador: {
    marginLeft: "2%",
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#81c3d7"
  },
  DivFotoUsuario: {
    paddingTop: "2%",
    height: "100%",
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  Meio: {
    flexDirection: "row",
    height: "100%",
    width: "66%",

  },
  sombra: {

    zIndex: 9,
    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 5

  },

  MeioEsquerda: {
    height: "100%",
    width: "50%",

  },
  MeioDireta: {
    height: "100%",
    width: "50%",

  },
  Direita: {
    height: "100%",
    width: "12%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  fotoUsuario: {
    paddingTop: 15,
    width: "75%",
    height: "65%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    zIndex: 1,
  },
  MeioEsquerdaCima: {
    paddingTop: 12,
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  subtituloNome: {
    fontSize: 15,
    fontWeight: "bold",
  },
  nome: {
    fontSize: 14,
  },
  MeioEsquerdaBaixo: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    paddingBottom: 12,
  },
  subtituloTipo: {
    fontSize: 15,
    fontWeight: "bold",
  },
  tipo: {
    fontSize: 14,
  },
  MeioDireitaCima: {
    paddingTop: 12,
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  subtituloData: {
    fontSize: 15,
    fontWeight: "bold",
  },
  data: {
    fontSize: 14,
  },
  MeioDireitaBaixo: {
    width: "100%",
    height: "50%",
    justifyContent: "center",

    paddingBottom: 12,
  },
  subtituloEndereco: {
    fontSize: 15,
    fontWeight: "bold",
  },
  endereco: {
    fontSize: 14,
  },
  usuario: {
    height: "23%",
    width: "67%",
  },
  whats: {
    height: "24%",
    width: "67%",
  },
  mais: {
    height: "23%",
    width: "67%",
  },
  fitaTrabalhador: {
    left: "20%",
    top: -0.5,
    position: 'absolute',
    height: "30%",
    width: "30%",
    zIndex: 10
  },
  fitaEmpregador: {
    left: "20%",
    top: -0.5,
    position: 'absolute',
    height: "30%",
    width: "30%",
    zIndex: 10
  },
  baixo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A5C4FF",
    borderRadius: 10,
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
    marginLeft: '23%',
    fontSize: 17,
    borderRadius: 12,
    paddingLeft: 5,
    paddingRight: 5,
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
  sombra: {

    zIndex: 9,
    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 5

  },
  DivMais: {
    paddingLeft: "6%",
    paddingTop: "4%",
    borderWidth: 0,
    zIndex: 10,
    position: 'absolute',
    top: '63%',
    left: '56%',
    height: "30%",
    width: "40%",
    borderRadius: 25,
    backgroundColor: '#A5C4FF',
    borderRadius: 20,
    borderBottomRightRadius: 1,

  },
  viewLogout: {
    flexDirection:'row',
    height: "18%",
    width: "100%",
    //backgroundColor: 'blue',
  },
  logout: {
    fontSize: 28,
    color: '#143273'
  },
  textLogout:{
    height: "100%",
    width: "77%",
    //backgroundColor: 'red',
  },
  viewPremium: {
    flexDirection:'row',
    height: "18%",
    width: "100%",
    marginBottom:'70%',
    //backgroundColor: 'blue',
  },
  Premium: {
    fontSize: 26,
    color: '#143273'
  },
  textPremium:{
    height: "100%",
    width: "77%",
    //backgroundColor: 'red',
  },

  viewVoltar: {

    paddingLeft: '10%',
    justifyContent: 'center',
    height: "38%",
    width: "100%",
    //backgroundColor: 'blue',
  },
  voltar: {
    fontSize: 25.5,
    color: '#143273'
  },
  viewImagemLogout:{
    justifyContent: 'center',
    alignItems:'center',
    height: "100%",
    width: "23%",
    //backgroundColor: 'grey',
  },
  viewImagemPremium:{
    justifyContent: 'center',
    alignItems:'center',
    height: "100%",
    width: "23%",
   // backgroundColor: 'grey',
  },
  ImagemLogout:{
    height: "70%",
    width: "82%",
    marginRight:'25%'
  },
  ImagemPremium:{
    height: "70%",
    width: "60%",
  },
});

export default Perfil;