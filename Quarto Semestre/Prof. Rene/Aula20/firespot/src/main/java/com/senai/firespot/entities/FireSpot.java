package com.senai.firespot.entities;

import java.time.LocalDate;

import com.senai.firespot.entities.enums.Identification;
import com.senai.firespot.entities.enums.Intensity;
import com.senai.firespot.entities.enums.Status;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class FireSpot {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate start;
    private LocalDate end;
    private String cause;

    @Enumerated(EnumType.STRING)
    private Status status;
    @Enumerated(EnumType.STRING)
    private Identification identification;
    @Enumerated(EnumType.ORDINAL)
    private Intensity intensity;

    @ManyToOne
    private User user;
    @ManyToOne
    private ParkAddress parkAddress;
    @ManyToOne
    private Sensor sensor;   

}
