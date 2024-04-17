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

import com.senai.pets.entities.User;
import com.senai.pets.repositories.UserRepository;


@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping
    public List<User> list(){
        return repository.findAll();
    }

    @PostMapping
    public User create(@RequestBody User user){
        return repository.save(user);
    }

    @GetMapping("/{id}")
    public User read(@PathVariable Long id){
        return repository.findById(id).get();
    }

    @PutMapping
    public User update(@RequestBody User user){
        return repository.save(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }

    /* 
        http://localhost:8080/swagger-ui.html
        
        @PathVariable GET | PUT | DELETE
        http://localhost:8080/users/{id}
         
        @RequestParam GET 
        http://localhost:8080/users?name=teste 

        @\RequestBody POST | PUT
        JSON
        {
            "name": "Teste",
            ...
        }
    */  
}
