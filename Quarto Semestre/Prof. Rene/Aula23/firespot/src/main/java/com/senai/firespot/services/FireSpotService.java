package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.FireSpot.FireSpotInput;
import com.senai.firespot.dtos.FireSpot.FireSpotOutput;
import com.senai.firespot.entities.FireSpot;
import com.senai.firespot.repositories.FireSpotRepository;

@Service
public class FireSpotService {
     
    @Autowired
    FireSpotRepository repository;

    @Transactional
    public FireSpotOutput create(FireSpotInput input){
        FireSpot fireSpot = convertInputToFireSpot(input);
        fireSpot = repository.save(fireSpot);

        return convertFireSpotToOutput(fireSpot);
    }

    public List<FireSpotOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(fireSpot -> convertFireSpotToOutput(fireSpot))
        .toList();
    }

    public FireSpotOutput read(Long id){
        FireSpot fireSpot = repository.findById(id).orElse(null);
        return convertFireSpotToOutput(fireSpot);
    }

    @Transactional
    public FireSpotOutput update(Long id, FireSpotInput input){
        if(repository.existsById(id)){
            FireSpot fireSpot = convertInputToFireSpot(input);
            fireSpot.setId(id);
            fireSpot = repository.save(fireSpot);
            return convertFireSpotToOutput(fireSpot);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private FireSpotOutput convertFireSpotToOutput(FireSpot fireSpot){
        if(fireSpot == null){
            return null;
        }
        FireSpotOutput output = new FireSpotOutput(
            fireSpot.getId(), 
            fireSpot.getStart(), 
            fireSpot.getEnd(), 
            fireSpot.getCause(), 
            fireSpot.getStatus(), 
            fireSpot.getIdentification(), 
            fireSpot.getIntensity(), 
            fireSpot.getUser(), 
            fireSpot.getParkAddress(), 
            fireSpot.getSensor()
        );

        return output;
    }

    private FireSpot convertInputToFireSpot(FireSpotInput input){
        FireSpot fireSpot = new FireSpot();
        fireSpot.setStart(input.start());
        fireSpot.setEnd(input.end());
        fireSpot.setCause(input.cause());
        fireSpot.setStatus(input.status());
        fireSpot.setIdentification(input.identification());
        fireSpot.setIntensity(input.intensity());
        fireSpot.setUser(input.user());
        fireSpot.setParkAddress(input.parkAddress());
        fireSpot.setSensor(input.sensor());

        return fireSpot;
    }
}
