package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.FireSpot;

public interface FireSpotRepository extends JpaRepository<FireSpot, Long>{
    
}
