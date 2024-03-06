package com.educonnect.prajwal.dto.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileRequest {

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

}
