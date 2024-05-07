package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.ParkAddress.ParkAddressInput;
import com.senai.firespot.dtos.ParkAddress.ParkAddressOutput;
import com.senai.firespot.entities.ParkAddress;
import com.senai.firespot.repositories.ParkAddressRepository;

@Service
public class ParkAddressService {

    @Autowired
    ParkAddressRepository repository;

    @Transactional
    public ParkAddressOutput create(ParkAddressInput input){
        ParkAddress parkAddress = convertInputToParkAddress(input);
        parkAddress = repository.save(parkAddress);

        return convertParkAddressToOutput(parkAddress);
    }

    public List<ParkAddressOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(parkAddress -> convertParkAddressToOutput(parkAddress))
        .toList();
    }

    public ParkAddressOutput read(Long id){
        ParkAddress parkAddress = repository.findById(id).orElse(null);
        return convertParkAddressToOutput(parkAddress);
    }

    @Transactional
    public ParkAddressOutput update(Long id, ParkAddressInput input){
        if(repository.existsById(id)){
            ParkAddress parkAddress = convertInputToParkAddress(input);
            parkAddress.setId(id);
            parkAddress = repository.save(parkAddress);
            return convertParkAddressToOutput(parkAddress);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private ParkAddressOutput convertParkAddressToOutput(ParkAddress parkAddress){
        if(parkAddress == null){
            return null;
        }
        ParkAddressOutput output = new ParkAddressOutput(
            parkAddress.getId(), 
            parkAddress.getCity(), 
            parkAddress.getState(), 
            parkAddress.getCountry(), 
            parkAddress.getParkName(), 
            parkAddress.getLatitude(), 
            parkAddress.getLongitude()
        );

        return output;
    }

    private ParkAddress convertInputToParkAddress(ParkAddressInput input){
        ParkAddress parkAddress = new ParkAddress();
        parkAddress.setCity(input.city());
        parkAddress.setState(input.state());
        parkAddress.setCountry(input.country());
        parkAddress.setParkName(input.parkName());
        parkAddress.setLatitude(input.latitude());
        parkAddress.setLongitude(input.longitude());

        return parkAddress;
    }
}
