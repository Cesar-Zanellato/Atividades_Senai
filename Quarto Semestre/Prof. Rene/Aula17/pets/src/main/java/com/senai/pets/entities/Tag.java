package com.senai.pets.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Tag {
    @Id
    private Long id;
    private String name; 
    
    @ManyToMany
    private List<Pet> pets;
}
