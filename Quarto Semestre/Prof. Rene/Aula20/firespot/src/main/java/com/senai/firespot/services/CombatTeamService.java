package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.CombatTeam.CombatTeamInput;
import com.senai.firespot.dtos.CombatTeam.CombatTeamOutput;
import com.senai.firespot.entities.CombatTeam;
import com.senai.firespot.repositories.CombatTeamRepository;

@Service
public class CombatTeamService {
    
    @Autowired
    CombatTeamRepository repository;

    @Transactional
    public CombatTeamOutput create(CombatTeamInput input){
        CombatTeam combatTeam = convertInputToCombatTeam(input);
        combatTeam = repository.save(combatTeam);

        return convertCombatTeamToOutput(combatTeam);
    }

    public List<CombatTeamOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(combatTeam -> convertCombatTeamToOutput(combatTeam))
        .toList();
    }

    public CombatTeamOutput read(Long id){
        CombatTeam combatTeam = repository.findById(id).orElse(null);
        return convertCombatTeamToOutput(combatTeam);
    }

    @Transactional
    public CombatTeamOutput update(Long id, CombatTeamInput input){
        if(repository.existsById(id)){
            CombatTeam combatTeam = convertInputToCombatTeam(input);
            combatTeam.setId(id);
            combatTeam = repository.save(combatTeam);
            return convertCombatTeamToOutput(combatTeam);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private CombatTeamOutput convertCombatTeamToOutput(CombatTeam combatTeam){
        if(combatTeam == null){
            return null;
        }
        CombatTeamOutput output = new CombatTeamOutput(
            combatTeam.getId(), 
            combatTeam.getNumberMembers(), 
            combatTeam.getUsers(), 
            combatTeam.getLeader(), 
            combatTeam.getParkAddress()
        );

        return output;
    }

    private CombatTeam convertInputToCombatTeam(CombatTeamInput input){
        CombatTeam combatTeam = new CombatTeam();
        combatTeam.setNumberMembers(input.numberMembers());
        combatTeam.setUsers(input.users());
        combatTeam.setLeader(input.leader());
        combatTeam.setParkAddress(input.parkAddress());

        return combatTeam;
    }
}
