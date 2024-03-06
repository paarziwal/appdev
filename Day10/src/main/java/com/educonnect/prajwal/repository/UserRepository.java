package com.educonnect.prajwal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.educonnect.prajwal.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}