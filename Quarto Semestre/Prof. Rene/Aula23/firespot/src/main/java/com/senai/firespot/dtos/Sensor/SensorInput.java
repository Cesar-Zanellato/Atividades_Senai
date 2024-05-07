package com.senai.firespot.dtos.Sensor;

import com.senai.firespot.entities.enums.SensorStatus;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

public record SensorInput(
    
    @Min(value = -180) @Max(value = 180)
    Float longitude,
    @Min(value = -90) @Max(value = 90)
    Float latitude,
    SensorStatus status,
    String name
){}