package com.senai.pets.entities;

import com.senai.pets.entities.enums.UserStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class User {
    @Id
    private Long id;
    private String username;
    private String fistName;
    private String lasName;
    private String email;
    private String password;
    private String phone;
    private UserStatus userStatus;

}
