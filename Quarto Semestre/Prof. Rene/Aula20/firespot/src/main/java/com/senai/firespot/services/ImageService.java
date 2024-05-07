package com.senai.firespot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senai.firespot.dtos.Image.ImageInput;
import com.senai.firespot.dtos.Image.ImageOutput;
import com.senai.firespot.entities.Image;
import com.senai.firespot.repositories.ImageRepository;

@Service
public class ImageService {
     
    @Autowired
    ImageRepository repository;

    @Transactional
    public ImageOutput create(ImageInput input){
        Image image = convertInputToImage(input);
        image = repository.save(image);

        return convertImageToOutput(image);
    }

    public List<ImageOutput> list(){
        return repository
        .findAll()
        .stream()
        .map(image -> convertImageToOutput(image))
        .toList();
    }

    public ImageOutput read(Long id){
        Image image = repository.findById(id).orElse(null);
        return convertImageToOutput(image);
    }

    @Transactional
    public ImageOutput update(Long id, ImageInput input){
        if(repository.existsById(id)){
            Image image = convertInputToImage(input);
            image.setId(id);
            image = repository.save(image);
            return convertImageToOutput(image);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    private ImageOutput convertImageToOutput(Image image){
        if(image == null){
            return null;
        }
        ImageOutput output = new ImageOutput(
            image.getId(), 
            image.getFileName(),
            image.getDate(),
            image.getSatelliteName(),
            image.getFireSpot()
        );

        return output;
    }

    private Image convertInputToImage(ImageInput input){
        Image image = new Image();
        image.setFileName(input.fileName());
        image.setDate(input.date());
        image.setSatelliteName(input.satelliteName());
        image.setFireSpot(input.fireSpot());

        return image;
    }
}
