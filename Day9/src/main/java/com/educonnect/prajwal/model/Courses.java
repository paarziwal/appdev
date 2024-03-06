package com.educonnect.prajwal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_courses")
public class Courses {

    @Id
    private int id;

    private String name;

    private String description;

    private int fee;

    private int seats;
    
    private int timeperiod;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "id")
    // private Institutes institute;

}
