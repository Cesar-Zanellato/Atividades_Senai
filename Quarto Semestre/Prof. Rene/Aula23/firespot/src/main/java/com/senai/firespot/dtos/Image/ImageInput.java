package com.senai.firespot.dtos.Image;

import java.time.LocalDateTime;

import com.senai.firespot.entities.FireSpot;

public record ImageInput(

    String fileName,
    LocalDateTime date,
    String satelliteName,
    FireSpot fireSpot
){}