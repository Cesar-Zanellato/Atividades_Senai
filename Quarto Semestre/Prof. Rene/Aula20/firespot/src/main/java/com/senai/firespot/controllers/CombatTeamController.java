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

import com.senai.firespot.dtos.CombatTeam.CombatTeamInput;
import com.senai.firespot.dtos.CombatTeam.CombatTeamOutput;
import com.senai.firespot.services.CombatTeamService;

@RestController
@RequestMapping("/combatTeam")
public class CombatTeamController {
    
    @Autowired
    private CombatTeamService service;

    @GetMapping
    public ResponseEntity<List<CombatTeamOutput>> list(){
        List<CombatTeamOutput> list = service.list();
        return ResponseEntity.ok(list);
    }
    
    @PostMapping
    public ResponseEntity<CombatTeamOutput> create(@RequestBody CombatTeamInput combatTeam){
        CombatTeamOutput output = service.create(combatTeam);
        return new ResponseEntity(output, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<CombatTeamOutput> read(@PathVariable Long id){
        CombatTeamOutput combatTeam = service.read(id);
        if(combatTeam == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(combatTeam);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CombatTeamOutput> update(@PathVariable Long id, @RequestBody CombatTeamInput combatTeam){
        CombatTeamOutput output = service.update(id, combatTeam);
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
