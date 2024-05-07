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

import com.senai.firespot.dtos.SensorRead.SensorReadInput;
import com.senai.firespot.dtos.SensorRead.SensorReadOutput;
import com.senai.firespot.services.SensorReadService;

@RestController
@RequestMapping("/sensorRead")
public class SensorReadController {
    
    @Autowired
    private SensorReadService service;

    @GetMapping
    public ResponseEntity<List<SensorReadOutput>> list(){
        List<SensorReadOutput> list = service.list();
        return ResponseEntity.ok(list);
    }
    
    @PostMapping
    public ResponseEntity<SensorReadOutput> create(@RequestBody SensorReadInput sensorRead){
        SensorReadOutput output = service.create(sensorRead);
        return new ResponseEntity(output, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<SensorReadOutput> read(@PathVariable Long id){
        SensorReadOutput sensorRead = service.read(id);
        if(sensorRead == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(sensorRead);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SensorReadOutput> update(@PathVariable Long id, @RequestBody SensorReadInput sensorRead){
        SensorReadOutput output = service.update(id, sensorRead);
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
