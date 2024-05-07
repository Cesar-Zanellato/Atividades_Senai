package com.senai.firespot.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class SensorRead {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Float value;
    private LocalDateTime date;
    @ManyToOne
    private Sensor sensor;

}
