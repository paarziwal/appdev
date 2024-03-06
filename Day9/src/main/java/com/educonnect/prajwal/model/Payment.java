package com.educonnect.prajwal.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Table(name = "_payment")
public class Payment {
    
    @Id
    private int id;

    private boolean status;

    private float amountpaid;

    private Date paymentdate;

    private String paymentmode;
}
