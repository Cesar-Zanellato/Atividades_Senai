package com.senai.pets.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.pets.entities.Pet;
import com.senai.pets.repositories.PetRepository;

@RestController
@RequestMapping("/pets")
public class PetController {
    @Autowired
    private PetRepository repository;

    @GetMapping
    public List<Pet> list(){
        return repository.findAll();
    }

    @PostMapping
    public Pet create(@RequestBody Pet pet){
        return repository.save(pet);
    }

    @GetMapping("/{id}")
    public Pet read(@PathVariable Long id){
        return repository.findById(id).get();
    }

    @PutMapping
    public Pet update(@RequestBody Pet pet){
        return repository.save(pet);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
}
