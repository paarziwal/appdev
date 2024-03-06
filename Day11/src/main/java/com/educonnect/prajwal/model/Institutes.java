package com.educonnect.prajwal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_institutes")
public class Institutes {

    @Id
    private int id;

    private String name;

    private boolean isAutonomous;

    private String address;

    private String city;

    private int rating;

    private int description;

    private String mobile;

    private String email;

    // @OneToMany(mappedBy = "institutes")
    // private List<Courses> courses;
}
