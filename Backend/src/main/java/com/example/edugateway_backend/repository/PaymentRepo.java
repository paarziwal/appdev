package com.example.edugateway_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.edugateway_backend.entity.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment,Long>{

}