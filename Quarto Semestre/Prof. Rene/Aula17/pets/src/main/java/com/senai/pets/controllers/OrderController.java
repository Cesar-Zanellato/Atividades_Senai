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

import com.senai.pets.entities.Order;
import com.senai.pets.repositories.OrderRepository;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderRepository repository;

    @GetMapping
    public List<Order> list(){
        return repository.findAll();
    }

    @PostMapping
    public Order create(@RequestBody Order order){
        return repository.save(order);
    }

    @GetMapping("/{id}")
    public Order read(@PathVariable Long id){
        return repository.findById(id).get();
    }

    @PutMapping
    public Order update(@RequestBody Order order){
        return repository.save(order);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
}
