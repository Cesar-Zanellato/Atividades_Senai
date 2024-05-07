package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.CombatTeam;

public interface CombatTeamRepository extends JpaRepository<CombatTeam, Long>{
    
}
