package com.senai.firespot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.firespot.entities.Image;

public interface ImageRepository extends JpaRepository<Image, Long>{
    
}
