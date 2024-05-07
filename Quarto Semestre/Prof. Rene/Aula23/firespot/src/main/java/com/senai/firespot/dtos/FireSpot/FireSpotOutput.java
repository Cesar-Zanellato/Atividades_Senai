package com.senai.firespot.dtos.FireSpot;

import java.time.LocalDate;

import com.senai.firespot.entities.ParkAddress;
import com.senai.firespot.entities.Sensor;
import com.senai.firespot.entities.User;
import com.senai.firespot.entities.enums.Identification;
import com.senai.firespot.entities.enums.Intensity;
import com.senai.firespot.entities.enums.Status;

public record FireSpotOutput(
    
    Long id,
    LocalDate start,
    LocalDate end,
    String cause,   
    Status status,
    Identification identification,
    Intensity intensity,    
    User user,
    ParkAddress parkAddress,
    Sensor sensor
){}
