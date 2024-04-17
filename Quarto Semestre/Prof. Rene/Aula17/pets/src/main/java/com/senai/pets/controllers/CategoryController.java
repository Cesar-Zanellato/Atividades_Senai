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

import com.senai.pets.entities.Category;
import com.senai.pets.repositories.CategoryRepository;


@RestController
@RequestMapping("/category")
public class CategoryController {
    
    @Autowired
    private CategoryRepository repository;

    @GetMapping
    public List<Category> list(){
        return repository.findAll();
    }

    @PostMapping
    public Category create(@RequestBody Category category){
        return repository.save(category);
    }

    @GetMapping("/{id}")
    public Category read(@PathVariable Long id){
        return repository.findById(id).get();
    }

    @PutMapping
    public Category update(@RequestBody Category category){
        return repository.save(category);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
}
