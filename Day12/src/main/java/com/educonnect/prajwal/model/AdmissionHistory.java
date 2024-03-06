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
@Table(name = "admission_history")
public class AdmissionHistory {

    @Id
    private int id;

    private String college;

    private String course;

    private Date admissiondate;

    private boolean status;

}
