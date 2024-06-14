package com.senai.back.saep.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.back.saep.dtos.ProfessorInput;
import com.senai.back.saep.dtos.ProfessorOutput;
import com.senai.back.saep.entities.Professor;
import com.senai.back.saep.repositories.ProfessorRepository;

import jakarta.transaction.Transactional;

@Service
public class ProfessorService {

    @Autowired
    ProfessorRepository repository;

    @Transactional
    public ProfessorOutput create(ProfessorInput input){
        Professor professor = convertInputToProfessor(input);
        professor = repository.save(professor);

        return convertProfessorToOutput(professor);
    }

    public List<ProfessorOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(professor -> convertProfessorToOutput(professor))
        .toList();
    }


    private ProfessorOutput convertProfessorToOutput(Professor professor){
        if(professor == null){
            return null;
        }
        ProfessorOutput output = new ProfessorOutput(
            professor.getId(),
            professor.getNome(),
            professor.getEmail(),
            professor.getSenha(),
            professor.getTurma()
        );

        return output;
    }

    private Professor convertInputToProfessor(ProfessorInput input){
        Professor professor = new Professor();
        professor.setNome(input.nome());
        professor.setEmail(input.email());
        professor.setSenha(input.senha());


        return professor;
    }
}





