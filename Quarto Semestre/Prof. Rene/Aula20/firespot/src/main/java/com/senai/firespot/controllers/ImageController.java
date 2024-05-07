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

import com.senai.firespot.dtos.Image.ImageInput;
import com.senai.firespot.dtos.Image.ImageOutput;
import com.senai.firespot.services.ImageService;



@RestController
@RequestMapping("/image")
public class ImageController {
    
    @Autowired
    private ImageService service;

    @GetMapping
    public ResponseEntity<List<ImageOutput>> list(){
        List<ImageOutput> list = service.list();
        return ResponseEntity.ok(list);
    }
    
    @PostMapping
    public ResponseEntity<ImageOutput> create(@RequestBody ImageInput image){
        ImageOutput output = service.create(image);
        return new ResponseEntity(output, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<ImageOutput> read(@PathVariable Long id){
        ImageOutput image = service.read(id);
        if(image == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(image);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ImageOutput> update(@PathVariable Long id, @RequestBody ImageInput image){
        ImageOutput output = service.update(id, image);
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
