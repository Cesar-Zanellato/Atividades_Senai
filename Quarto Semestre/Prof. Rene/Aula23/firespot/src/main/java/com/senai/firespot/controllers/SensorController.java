package com.senai.firespot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.firespot.dtos.Sensor.SensorInput;
import com.senai.firespot.dtos.Sensor.SensorOutput;
import com.senai.firespot.services.SensorService;

@RestController
@RequestMapping("/sensor")
public class SensorController {
    
    @Autowired
    private SensorService service;

    @GetMapping
    public ResponseEntity<List<SensorOutput>> list(){
        List<SensorOutput> list = service.list();
        return ResponseEntity.ok(list);
    }
    
    @PostMapping
    public ResponseEntity<SensorOutput> create(@RequestBody SensorInput sensor){
        SensorOutput output = service.create(sensor);
        return new ResponseEntity(output, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<SensorOutput> read(@PathVariable Long id){
        SensorOutput sensor = service.read(id);
        if(sensor == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(sensor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SensorOutput> update(@PathVariable Long id, @RequestBody SensorInput sensor){
        SensorOutput output = service.update(id, sensor);
        if(output == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(output);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
