package com.senai.back.saep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.back.saep.entities.Atividade;

public interface AtividadeRepository extends JpaRepository<Atividade, Long>{
    
}
