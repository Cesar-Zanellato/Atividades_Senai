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

import com.senai.back.saep.dtos.AtividadeInput;
import com.senai.back.saep.dtos.AtividadeOutput;
import com.senai.back.saep.services.AtividadeService;

@RestController @Validated
@CrossOrigin("*")
@RequestMapping("/atividades")
public class AtividadeController {
    
    @Autowired
    private AtividadeService service;

    @PostMapping
    public ResponseEntity<AtividadeOutput> create(@RequestBody AtividadeInput atividade){

        AtividadeOutput output = service.create(atividade);
        return new ResponseEntity(output, HttpStatus.CREATED);
        
    }

    @GetMapping
    public ResponseEntity<List<AtividadeOutput>> list(){
        List<AtividadeOutput> list = service.list();
        return ResponseEntity.ok(list);
    }

}
