package com.senai.pets.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.pets.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
    
}
