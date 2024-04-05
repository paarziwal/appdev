package com.example.edugateway_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.edugateway_backend.entity.Details;
@Repository
public interface DetailsRepo extends JpaRepository<Details,Long>{

}