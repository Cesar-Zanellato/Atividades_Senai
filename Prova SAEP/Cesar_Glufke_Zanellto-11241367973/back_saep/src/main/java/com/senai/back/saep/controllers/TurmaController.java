package com.senai.back.saep.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.back.saep.dtos.TurmaInput;
import com.senai.back.saep.dtos.TurmaOutput;
import com.senai.back.saep.services.TurmaService;


@RestController @Validated
@CrossOrigin("*")
@RequestMapping("/turmas")
public class TurmaController {

    @Autowired
    private TurmaService service;

    @PostMapping
    public ResponseEntity<TurmaOutput> create(@RequestBody TurmaInput turma){

        TurmaOutput output = service.create(turma);
        return new ResponseEntity(output, HttpStatus.CREATED);
        
    }

    @GetMapping
    public ResponseEntity<List<TurmaOutput>> list(){
        List<TurmaOutput> list = service.list();
        return ResponseEntity.ok(list); 
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){

        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
