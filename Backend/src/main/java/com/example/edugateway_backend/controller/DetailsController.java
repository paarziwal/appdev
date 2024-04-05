package com.example.edugateway_backend.controller;

import com.example.edugateway_backend.entity.Details;
import com.example.edugateway_backend.service.DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userdetails")
public class DetailsController {

    @Autowired
    private DetailsService userDetailsService;

    @GetMapping
    public List<Details> getAllUserDetails() {
        return userDetailsService.getAllUserDetails();
    }

    @GetMapping("/{userId}")
    public Details getUserDetailsById(@PathVariable Long userId) {
        return userDetailsService.getUserDetailsById(userId);
    }

    @PostMapping
    public Details createUserDetails(@RequestBody Details userDetails) {
        return userDetailsService.createUserDetails(userDetails);
    }

    @PutMapping("/{userId}")
    public Details updateUserDetails(@PathVariable Long userId, @RequestBody Details updatedUserDetails) {
        return userDetailsService.updateUserDetails(userId, updatedUserDetails);
    }

    @DeleteMapping("/{userId}")
    public boolean deleteUserDetails(@PathVariable Long userId) {
        userDetailsService.deleteUserDetails(userId);
        return true;
    }
}
