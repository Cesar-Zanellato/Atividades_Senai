import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/login.js';
import Cadastro from './src/views/Cadastro.js';
import EsqueciSenha from './src/views/ForgotPasswordScreen';
import Home from './src/views/Home';
import TelaRecomendacao from './src/views/TelaRecomendacao';
import Servico from './src/views/Servico';
import TelaCriarServico from './src/views/TelaCriarServico';
import Trabalho from './src/views/Trabalho';
import TelaCriarTrabalho from './src/views/TelaCriarTrabalho';
import Perfil from './src/views/Perfil';
import EditarPerfil from './src/views/EditarPerfil';
import TelaPremium from './src/views/TelaPremium';

const Stack = createNativeStackNavigator()

const App = () => {
return(
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      <Stack.Screen name="TelaRecomendacao" component={TelaRecomendacao} />
      <Stack.Screen name="Servico" component={Servico} />
      <Stack.Screen name="TelaCriarServico" component={TelaCriarServico} />
      <Stack.Screen name="Trabalho" component={Trabalho} />
      <Stack.Screen name="TelaCriarTrabalho" component={TelaCriarTrabalho} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="TelaPremium" component={TelaPremium} />
    </Stack.Navigator>
  </NavigationContainer>
)}

export default () => {
  return (
        <App />
  );
};