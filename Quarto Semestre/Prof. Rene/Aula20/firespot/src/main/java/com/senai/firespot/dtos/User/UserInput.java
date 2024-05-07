package com.senai.firespot.dtos.User;

import jakarta.validation.constraints.Email;

public record UserInput(

    String name,
    String lastName,
    @Email
    String email,
    String password
) {}
