package com.example.edugateway_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.edugateway_backend.entity.Institute;

@Repository
public interface InstituteRepo extends JpaRepository<Institute,Long>{

}