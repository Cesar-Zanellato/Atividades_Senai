package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.ParkAddress;

public interface ParkAddressRepository extends JpaRepository<ParkAddress, Long>{
    
}
