package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.Leader.LeaderInput;
import com.senai.firespot.dtos.Leader.LeaderOutput;
import com.senai.firespot.entities.Leader;
import com.senai.firespot.repositories.LeaderRepository;

@Service
public class LeaderService {

    @Autowired
    LeaderRepository repository;

    @Transactional
    public LeaderOutput create(LeaderInput input){
        Leader leader = convertInputToLeader(input);
        leader = repository.save(leader);

        return convertLeaderToOutput(leader);
    }

    public List<LeaderOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(leader -> convertLeaderToOutput(leader))
        .toList();
    }

    public LeaderOutput read(Long id){
        Leader leader = repository.findById(id).orElse(null);
        return convertLeaderToOutput(leader);
    }

    @Transactional
    public LeaderOutput update(Long id, LeaderInput input){
        if(repository.existsById(id)){
            Leader leader = convertInputToLeader(input);
            leader.setId(id);
            leader = repository.save(leader);
            return convertLeaderToOutput(leader);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private LeaderOutput convertLeaderToOutput(Leader leader){
        if(leader == null){
            return null;
        }
        LeaderOutput output = new LeaderOutput(
            leader.getId(), 
            leader.getName(), 
            leader.getLastName(), 
            leader.getEmail(), 
            leader.getPassword(), 
            leader.getIsAdmin(), 
            leader.getTeam()
        );

        return output;
    }

    private Leader convertInputToLeader(LeaderInput input){
        Leader leader = new Leader();
        leader.setName(input.name());
        leader.setLastName(input.lastName());
        leader.setEmail(input.email());
        leader.setPassword(input.password());
        leader.setIsAdmin(input.isAdmin());
        leader.setTeam(input.team());

        return leader;
    }
}
