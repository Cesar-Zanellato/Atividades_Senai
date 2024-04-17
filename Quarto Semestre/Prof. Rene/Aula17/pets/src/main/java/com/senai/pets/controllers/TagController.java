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

import com.senai.pets.entities.Tag;
import com.senai.pets.repositories.TagRepository;


@RestController
@RequestMapping("/tag")
public class TagController {
    
    @Autowired
    private TagRepository repository;

    @GetMapping
    public List<Tag> list(){
        return repository.findAll();
    }

    @PostMapping
    public Tag create(@RequestBody Tag tag){
        return repository.save(tag);
    }

    @GetMapping("/{id}")
    public Tag read(@PathVariable Long id){
        return repository.findById(id).get();
    }

    @PutMapping
    public Tag update(@RequestBody Tag tag){
        return repository.save(tag);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
}
