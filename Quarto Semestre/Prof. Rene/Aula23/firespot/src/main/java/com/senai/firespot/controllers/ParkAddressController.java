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

import com.senai.firespot.dtos.ParkAddress.ParkAddressInput;
import com.senai.firespot.dtos.ParkAddress.ParkAddressOutput;
import com.senai.firespot.services.ParkAddressService;

@RestController
@RequestMapping("/parkAddress")
public class ParkAddressController {
    
    @Autowired
    private ParkAddressService service;

    @GetMapping
    public ResponseEntity<List<ParkAddressOutput>> list(){
        List<ParkAddressOutput> list = service.list();
        return ResponseEntity.ok(list);
    }
    
    @PostMapping
    public ResponseEntity<ParkAddressOutput> create(@RequestBody ParkAddressInput parkAddress){
        ParkAddressOutput output = service.create(parkAddress);
        return new ResponseEntity(output, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<ParkAddressOutput> read(@PathVariable Long id){
        ParkAddressOutput parkAddress = service.read(id);
        if(parkAddress == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(parkAddress);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ParkAddressOutput> update(@PathVariable Long id, @RequestBody ParkAddressInput parkAddress){
        ParkAddressOutput output = service.update(id, parkAddress);
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
