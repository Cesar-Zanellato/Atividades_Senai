package com.senai.firespot.dtos.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UserInput(

    String name,
    String lastName,
    @Email
    String email,
    @Size(min = 6)
    String password
) {}
