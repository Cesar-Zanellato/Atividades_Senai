package com.senai.firespot.dtos.Leader;

public record LeaderInput (

    String name,
    String lastName,
    String email,
    String password,
    Boolean isAdmin,
    String team
){}
