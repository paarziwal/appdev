package com.example.edugateway_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.edugateway_backend.entity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long>{
    Student findByUserId(Long userId);
}