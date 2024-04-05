package com.senai.pets.entities;

import com.senai.pets.entities.enums.Office;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Administrador extends User {
    private Boolean isAdmin;
    @Enumerated(EnumType.STRING)
    private Office office;
}
