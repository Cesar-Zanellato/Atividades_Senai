package com.senai.pets.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Address {
    @Id
    private Long id;
    private String street;
    private String number;
    private String city;
    private String state;
    private String district;
    private String cep;
    private String complement;
}
