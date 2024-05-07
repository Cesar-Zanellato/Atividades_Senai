package com.senai.firespot.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data @EqualsAndHashCode(callSuper = true) @NoArgsConstructor @AllArgsConstructor @Entity @DiscriminatorValue("1") 
public class Leader extends User {
    private Boolean isAdmin;
    private String team;
}