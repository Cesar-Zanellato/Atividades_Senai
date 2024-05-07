package com.senai.firespot.dtos.Sensor;

import com.senai.firespot.entities.enums.SensorStatus;

public record SensorOutput(

    Long id,
    Float longitude,
    Float latitude,
    SensorStatus status,
    String name
){}
