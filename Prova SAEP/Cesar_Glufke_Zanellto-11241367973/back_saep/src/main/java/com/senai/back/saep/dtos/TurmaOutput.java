package com.senai.back.saep.dtos;

import java.util.List;

import com.senai.back.saep.entities.Atividade;

public record TurmaOutput(

    Long id,
    String nome,
    
    List<Atividade> atividade

) {
    
}
