package com.senai.back.saep.dtos;

import java.util.List;

import com.senai.back.saep.entities.Turma;

public record ProfessorOutput(

    Long id,
    String nome,
    String email,
    String senha,

    List<Turma> turma
) {
    
}
