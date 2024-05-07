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

import com.senai.firespot.dtos.Leader.LeaderInput;
import com.senai.firespot.dtos.Leader.LeaderOutput;
import com.senai.firespot.services.LeaderService;


@RestController
@RequestMapping("/leader")
public class LeaderController {
    
    @Autowired
    private LeaderService service;

    @GetMapping
    public ResponseEntity<List<LeaderOutput>> list(){
        List<LeaderOutput> list = service.list();
        return ResponseEntity.ok(list);
    }
    
    @PostMapping
    public ResponseEntity<LeaderOutput> create(@RequestBody LeaderInput leader){
        LeaderOutput output = service.create(leader);
        return new ResponseEntity(output, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<LeaderOutput> read(@PathVariable Long id){
        LeaderOutput leader = service.read(id);
        if(leader == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(leader);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LeaderOutput> update(@PathVariable Long id, @RequestBody LeaderInput leader){
        LeaderOutput output = service.update(id, leader);
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
