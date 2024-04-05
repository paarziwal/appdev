package com.example.edugateway_backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.edugateway_backend.dto.request.AuthenticationRequest;
import com.example.edugateway_backend.dto.request.RegisterRequest;
import com.example.edugateway_backend.dto.response.AuthenticationResponse;
import com.example.edugateway_backend.entity.User;
import com.example.edugateway_backend.exceptions.InvalidCredentialsException;
import com.example.edugateway_backend.exceptions.UserNotFoundException;
import com.example.edugateway_backend.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
public ResponseEntity<Map<String, String>> register(@RequestBody RegisterRequest request) {
    AuthenticationResponse authenticationResponse = authenticationService.register(request);

    // Extract the registered User from the AuthenticationResponse
    User savedUser = authenticationService.getUserByEmail(request.getEmail());

    Map<String, String> response = new HashMap<>();
    response.put("message", "Registration successful");
    response.put("userId", String.valueOf(savedUser.getId())); // Add user ID to the response
    response.put("token", authenticationResponse.getToken()); // Add token to the response

    return ResponseEntity.ok(response);
}

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        try {
            // Authenticate user
            authenticationService.authenticate(request);
            return ResponseEntity.ok("Login successful");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User does not exist");
        } catch (InvalidCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
