package com.senai.back.saep.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.back.saep.dtos.ProfessorInput;
import com.senai.back.saep.dtos.ProfessorOutput;
import com.senai.back.saep.services.ProfessorService;

@RestController @Validated
@CrossOrigin("*")
@RequestMapping("/professores")
public class ProfessorController {
    @Autowired
    private ProfessorService service;

    @GetMapping
    public ResponseEntity<List<ProfessorOutput>> list(){
        List<ProfessorOutput> list = service.list();
        return ResponseEntity.ok(list);
    }

    @PostMapping
    public ResponseEntity<ProfessorOutput> create(@RequestBody ProfessorInput professor){
        ProfessorOutput output = service.create(professor);
        return new ResponseEntity(output, HttpStatus.CREATED);
        
    }
}
