package com.senai.firespot.dtos.SensorRead;

import java.time.LocalDateTime;

import com.senai.firespot.entities.Sensor;

public record SensorReadOutput(

    Long id,
    Float value,
    LocalDateTime date,
    Sensor sensor
){}
