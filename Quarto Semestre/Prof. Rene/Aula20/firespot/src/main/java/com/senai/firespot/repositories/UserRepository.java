package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
