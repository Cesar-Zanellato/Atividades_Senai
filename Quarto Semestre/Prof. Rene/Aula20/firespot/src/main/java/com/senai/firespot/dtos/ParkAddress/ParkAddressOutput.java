package com.senai.firespot.dtos.ParkAddress;

public record ParkAddressOutput(

    Long id,
    String city,
    String state,
    String country,
    String parkName,
    Float latitude,
    Float longitude
){}
