package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.Leader;

public interface LeaderRepository extends JpaRepository<Leader, Long>{
    
}
