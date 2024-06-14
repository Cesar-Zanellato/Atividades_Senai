package com.senai.back.saep.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.back.saep.dtos.AtividadeInput;
import com.senai.back.saep.dtos.AtividadeOutput;
import com.senai.back.saep.entities.Atividade;
import com.senai.back.saep.repositories.AtividadeRepository;

import jakarta.transaction.Transactional;

@Service
public class AtividadeService {


    @Autowired
    AtividadeRepository repository;

    @Transactional
    public AtividadeOutput create(AtividadeInput input){
        Atividade atividade = convertInputToAtividade(input);
        atividade = repository.save(atividade);

        return convertAtividadeToOutput(atividade);
    }

    public List<AtividadeOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(atividade -> convertAtividadeToOutput(atividade))
        .toList();
    }

    private AtividadeOutput convertAtividadeToOutput(Atividade atividade){
        if(atividade == null){
            return null;
        }
        AtividadeOutput output = new AtividadeOutput(
            atividade.getId(),
            atividade.getDescricao()
            );

        return output;
    }

    private Atividade convertInputToAtividade(AtividadeInput input){
        Atividade atividade = new Atividade();
        atividade.setDescricao(input.descricao());
        

        return atividade;
    }
}
