package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.SensorRead.SensorReadInput;
import com.senai.firespot.dtos.SensorRead.SensorReadOutput;
import com.senai.firespot.entities.SensorRead;
import com.senai.firespot.repositories.SensorReadRepository;

@Service
public class SensorReadService {
    
    @Autowired
    SensorReadRepository repository;

    @Transactional
    public SensorReadOutput create(SensorReadInput input){
        SensorRead sensorRead = convertInputToSensorRead(input);
        sensorRead = repository.save(sensorRead);

        return convertSensorReadToOutput(sensorRead);
    }

    public List<SensorReadOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(sensorRead -> convertSensorReadToOutput(sensorRead))
        .toList();
    }

    public SensorReadOutput read(Long id){
        SensorRead sensorRead = repository.findById(id).orElse(null);
        return convertSensorReadToOutput(sensorRead);
    }

    @Transactional
    public SensorReadOutput update(Long id, SensorReadInput input){
        if(repository.existsById(id)){
            SensorRead sensorRead = convertInputToSensorRead(input);
            sensorRead.setId(id);
            sensorRead = repository.save(sensorRead);
            return convertSensorReadToOutput(sensorRead);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private SensorReadOutput convertSensorReadToOutput(SensorRead sensorRead){
        if(sensorRead == null){
            return null;
        }
        SensorReadOutput output = new SensorReadOutput(
            sensorRead.getId(), 
            sensorRead.getValue(), 
            sensorRead.getDate(), 
            sensorRead.getSensor()
        );

        return output;
    }

    private SensorRead convertInputToSensorRead(SensorReadInput input){
        SensorRead sensorRead = new SensorRead();
        sensorRead.setValue(input.value());
        sensorRead.setDate(input.date());
        sensorRead.setSensor(input.sensor());

        return sensorRead;
    }
}
