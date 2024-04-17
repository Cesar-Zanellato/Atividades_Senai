package com.senai.pets.entities;
import com.senai.pets.entities.enums.Office;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@DiscriminatorValue("1")
public class Administrator extends User {
    private Boolean isAdmin;
    @Enumerated(EnumType.STRING)
    private Office office;
}
