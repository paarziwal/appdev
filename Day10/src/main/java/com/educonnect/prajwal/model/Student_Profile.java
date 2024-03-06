package com.educonnect.prajwal.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
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
@Table(name = "_student_profile")
public class Student_Profile {

    @Id
    private int id;


    private String firstname;

    private String lastname;

    private String middlename;

    private String age;

    private String gender;

    private Date birthday;

    private String email;

    private String address;

    private String city;
    
    private String state;
    
    private int zipcode;
    
    private int nationality;
    
    private float tenthmark;
    
    private float twelvethmark;

    private float phymarks;

    private float chemmarks;
    
    private float mathmarks;

    @OneToOne
    private User user;
}
