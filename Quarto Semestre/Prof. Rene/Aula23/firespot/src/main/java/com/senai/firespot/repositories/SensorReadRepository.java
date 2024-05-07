package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.SensorRead;

public interface SensorReadRepository extends JpaRepository<SensorRead, Long>{
    
}
