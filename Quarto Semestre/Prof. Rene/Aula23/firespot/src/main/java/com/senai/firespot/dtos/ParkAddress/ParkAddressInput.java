package com.senai.firespot.dtos.ParkAddress;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

public record ParkAddressInput(
    
    String city,
    String state,
    String country,
    String parkName,
    @Min(value = -180) @Max(value = 180)
    Float longitude,
    @Min(value = -90) @Max(value = 90)
    Float latitude
){}
