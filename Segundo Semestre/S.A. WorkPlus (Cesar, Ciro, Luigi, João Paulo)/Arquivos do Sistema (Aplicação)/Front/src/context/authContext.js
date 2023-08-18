import React, {useReducer} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

let initialStage = {
    Loading: true,
    isLogged: false, 
    name: "",
    isAdmin: false,
    idUser: "",
    idPostTrabalho: "",
    idPostServico: "",
    update: false
}

const reducer = (state, action) => {
    switch(action.type){
        case "logIn":
            return {...state, isLogged: action.payload, Loading: false }
        case "logOut":
            AsyncStorage.removeItem("token");
            return {
                ...state, 
                isLogged: false,
                isAdmin: false
            }
        case "verify":
            return {
                ...state,
                isLogged: true,
                Loading: false,
                isUser: action.payload.idUser,
                isPostTrabalho: action.payload.idPostTrabalho,
                isPostServico: action.payload.idPostServico,
            }
        case "setPostTrabalho": 
            return {
                ...state,
                idPostTrabalho: action.payload.idPostTrabalho
                
            }
        case "setPostServico": 
            return {
                ...state,
                idPostServico: action.payload.idPostServico
            
        }
        case "update": 
            return{
                ...state,
                update: action.payload
            }
        default:
            return state
    }
};

export const Context = React.createContext();

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialStage);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
};