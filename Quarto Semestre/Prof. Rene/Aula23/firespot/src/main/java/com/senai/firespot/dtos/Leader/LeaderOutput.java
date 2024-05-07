package com.senai.firespot.dtos.Leader;

public record LeaderOutput(

    Long id,
    String name,
    String lastName,
    String email,
    String password,
    Boolean isAdmin,
    String team
){}
