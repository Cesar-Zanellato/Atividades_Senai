package com.senai.pets.entities;

import com.senai.pets.entities.enums.Status;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class Pet {
    @Id
    private Long id;
    private String name;
    private Status status;

}
