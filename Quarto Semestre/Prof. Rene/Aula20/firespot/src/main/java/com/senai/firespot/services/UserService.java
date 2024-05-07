package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.User.UserInput;
import com.senai.firespot.dtos.User.UserOutput;
import com.senai.firespot.entities.User;
import com.senai.firespot.repositories.UserRepository;

@Service
public class UserService {
        
    @Autowired
    UserRepository repository;

    @Transactional
    public UserOutput create(UserInput input){
        User user = convertInputToUser(input);
        user = repository.save(user);

        return convertUserToOutput(user);
    }

    public List<UserOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(user -> convertUserToOutput(user))
        .toList();
    }

    public UserOutput read(Long id){
        User user = repository.findById(id).orElse(null);
        return convertUserToOutput(user);
    }

    @Transactional
    public UserOutput update(Long id, UserInput input){
        if(repository.existsById(id)){
            User user = convertInputToUser(input);
            user.setId(id);
            user = repository.save(user);
            return convertUserToOutput(user);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private UserOutput convertUserToOutput(User user){
        if(user == null){
            return null;
        }
        UserOutput output = new UserOutput(
            user.getId(), 
            user.getName(), 
            user.getLastName(), 
            user.getEmail(),
            user.getPassword()
        );

        return output;
    }

    private User convertInputToUser(UserInput input){
        User user = new User();
        user.setName(input.name());
        user.setLastName(input.lastName());
        user.setEmail(input.email());
        user.setPassword(input.password());

        return user;
    }
}
