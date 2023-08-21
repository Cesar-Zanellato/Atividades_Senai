import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const login = express.Router();

login.post("/", async (req, res) => {

    const { email, password } = req.body;

    const registeredUser = await User.findOne(
        { where: { email }}
    ).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if(!registeredUser)
        return res 
            .status(400)
            .json({ message: "Usuário ou senha inválidos."})
    
    if(password === registeredUser.password){
        const token = jwt.sign(
            {
                idUser: registeredUser.idUser,
                name: registeredUser.name,
            },
            process.env.JWT_SECRET, 
            {
                expiresIn: "1h"
            }
        );
    
        res.json({
            message:"Bem-Vindo",
            token: token
        })
    } else {
        
        return res
            .status(400)
            .json({message: "Usuário ou senha inválidos."})
            

    }
});

export default login;