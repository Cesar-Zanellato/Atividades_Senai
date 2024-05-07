package com.senai.firespot.dtos.User;

public record UserOutput(

    Long id,
    String name,
    String lastName,
    String email,
    String password
){}

