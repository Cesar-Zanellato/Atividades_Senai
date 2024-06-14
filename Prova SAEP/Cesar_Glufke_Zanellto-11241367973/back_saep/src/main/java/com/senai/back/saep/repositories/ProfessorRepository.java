package com.senai.back.saep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.back.saep.entities.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long>{
    
}
