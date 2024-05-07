package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.Sensor.SensorInput;
import com.senai.firespot.dtos.Sensor.SensorOutput;
import com.senai.firespot.entities.Sensor;
import com.senai.firespot.repositories.SensorRepository;

@Service
public class SensorService {
    
    @Autowired
    SensorRepository repository;

    @Transactional
    public SensorOutput create(SensorInput input){
        Sensor sensor = convertInputToSensor(input);
        sensor = repository.save(sensor);

        return convertSensorToOutput(sensor);
    }

    public List<SensorOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(sensor -> convertSensorToOutput(sensor))
        .toList();
    }

    public SensorOutput read(Long id){
        Sensor sensor = repository.findById(id).orElse(null);
        return convertSensorToOutput(sensor);
    }

    @Transactional
    public SensorOutput update(Long id, SensorInput input){
        if(repository.existsById(id)){
            Sensor sensor = convertInputToSensor(input);
            sensor.setId(id);
            sensor = repository.save(sensor);
            return convertSensorToOutput(sensor);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private SensorOutput convertSensorToOutput(Sensor sensor){
        if(sensor == null){
            return null;
        }
        SensorOutput output = new SensorOutput(
            sensor.getId(), 
            sensor.getLongitude(), 
            sensor.getLatitude(), 
            sensor.getStatus(),
            sensor.getName()
        );

        return output;
    }

    private Sensor convertInputToSensor(SensorInput input){
        Sensor sensor = new Sensor();
        sensor.setLongitude(input.longitude());
        sensor.setLatitude(input.latitude());
        sensor.setStatus(input.status());
        sensor.setName(input.name());

        return sensor;
    }
}
