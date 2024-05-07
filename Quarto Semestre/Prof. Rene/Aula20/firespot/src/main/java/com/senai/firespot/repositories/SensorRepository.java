package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.Sensor;

public interface SensorRepository extends JpaRepository<Sensor, Long>{
    
}
