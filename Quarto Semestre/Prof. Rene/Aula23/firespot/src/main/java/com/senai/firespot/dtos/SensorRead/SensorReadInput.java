package com.senai.firespot.dtos.SensorRead;

import java.time.LocalDateTime;

import com.senai.firespot.entities.Sensor;

public record SensorReadInput(

    Float value,
    LocalDateTime date,
    Sensor sensor
){}
