package com.example.edugateway_backend.service;

import com.example.edugateway_backend.entity.Details;
import com.example.edugateway_backend.repository.DetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetailsService {

    @Autowired
    private DetailsRepo userDetailsRepository;

    public List<Details> getAllUserDetails() {
        return userDetailsRepository.findAll();
    }

    public Details getUserDetailsById(Long userId) {
        Optional<Details> optionalUserDetails = userDetailsRepository.findById(userId);
        return optionalUserDetails.orElse(null);
    }

    public Details createUserDetails(Details userDetails) {
        // You might want to add validation logic or other business logic before saving
        return userDetailsRepository.save(userDetails);
    }

    public Details updateUserDetails(Long userId, Details updatedUserDetails) {
        Optional<Details> optionalUserDetails = userDetailsRepository.findById(userId);
        if (optionalUserDetails.isPresent()) {
            // Update the existing user details with the new information
            Details existingUserDetails = optionalUserDetails.get();
            // Set updated fields
            existingUserDetails.setUserEmail(updatedUserDetails.getUserEmail());
            existingUserDetails.setUserName(updatedUserDetails.getUserName());
            // Update other fields as needed

            // Save the updated user details
            return userDetailsRepository.save(existingUserDetails);
        }
        return null; // Or throw an exception indicating that the user details with the given ID was not found
    }

    public boolean deleteUserDetails(Long userId) {
        userDetailsRepository.deleteById(userId);
        return true;
    }
}
