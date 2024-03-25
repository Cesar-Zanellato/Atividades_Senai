package com.senai.atividade.aula;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/aula")
public class HelloWorld {


    // http://localhost8081/aula?name=Nome  
    @GetMapping
    public String helloWorld(@RequestParam String name) {
        return "Oie " + name;
    };

    // http://localhost8081/aula/temp?celcius=0  
    @GetMapping("/temp")
    public String fahrenheit(@RequestParam float celcius) {
        float fahrenheit = celcius * 9/5 + 32;
        return "A temperatura em graus Fahrenheit é: " + fahrenheit;
    }
    
};