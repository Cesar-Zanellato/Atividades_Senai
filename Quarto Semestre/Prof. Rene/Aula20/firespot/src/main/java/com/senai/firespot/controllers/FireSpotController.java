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

import com.senai.firespot.dtos.FireSpot.FireSpotInput;
import com.senai.firespot.dtos.FireSpot.FireSpotOutput;
import com.senai.firespot.services.FireSpotService;


@RestController
@RequestMapping("/fireSpot")
public class FireSpotController {
    
    @Autowired
    private FireSpotService service;

    @GetMapping
    public ResponseEntity<List<FireSpotOutput>> list(){
        List<FireSpotOutput> list = service.list();
        return ResponseEntity.ok(list);
    }
    
    @PostMapping
    public ResponseEntity<FireSpotOutput> create(@RequestBody FireSpotInput fireSpot){
        FireSpotOutput output = service.create(fireSpot);
        return new ResponseEntity(output, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<FireSpotOutput> read(@PathVariable Long id){
        FireSpotOutput fireSpot = service.read(id);
        if(fireSpot == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(fireSpot);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FireSpotOutput> update(@PathVariable Long id, @RequestBody FireSpotInput fireSpot){
        FireSpotOutput output = service.update(id, fireSpot);
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
