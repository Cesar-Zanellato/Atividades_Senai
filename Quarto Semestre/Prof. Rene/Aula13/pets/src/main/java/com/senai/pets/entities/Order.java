package com.senai.pets.entities;

import java.util.List;
import com.senai.pets.entities.enums.OrderStatus;
import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity @Table(name = "order_table") 
@Data @NoArgsConstructor @AllArgsConstructor
public class Order {
    @Id
    private Long id;
    private Integer quantity;
    private LocalDateTime shipDate;
    private OrderStatus status;
    private Boolean complete;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<User> users;
}
