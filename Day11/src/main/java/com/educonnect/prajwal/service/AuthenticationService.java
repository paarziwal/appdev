package com.educonnect.prajwal.service;

import com.educonnect.prajwal.dto.request.LoginRequest;
import com.educonnect.prajwal.dto.request.RegisterRequest;
import com.educonnect.prajwal.dto.response.LoginResponse;
import com.educonnect.prajwal.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}