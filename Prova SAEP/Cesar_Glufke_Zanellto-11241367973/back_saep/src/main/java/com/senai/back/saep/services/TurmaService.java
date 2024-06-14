package com.senai.back.saep.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.back.saep.dtos.TurmaInput;
import com.senai.back.saep.dtos.TurmaOutput;
import com.senai.back.saep.entities.Turma;
import com.senai.back.saep.repositories.TurmaRepository;

import jakarta.transaction.Transactional;

@Service
public class TurmaService {

    @Autowired
    TurmaRepository repository;

    @Transactional
    public TurmaOutput create(TurmaInput input){
        Turma turma = convertInputToTurma(input);
        turma = repository.save(turma);

        return convertTurmaToOutput(turma);
    }

    public List<TurmaOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(turma -> convertTurmaToOutput(turma))
        .toList();
    }

    public void delete(Long id){

        repository.deleteById(id);
    }

    private TurmaOutput convertTurmaToOutput(Turma turma){
        if(turma == null){
            return null;
        }
        TurmaOutput output = new TurmaOutput(
            turma.getId(),
            turma.getNome(),
            turma.getAtividade()
        );

        return output;
    }

    private Turma convertInputToTurma(TurmaInput input){
        Turma turma = new Turma();
        turma.setNome(input.nome());


        return turma;
    }
}
