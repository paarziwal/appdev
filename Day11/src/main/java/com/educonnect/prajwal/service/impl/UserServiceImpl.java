package com.educonnect.prajwal.service.impl;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.educonnect.prajwal.dto.request.PasswordRequest;
import com.educonnect.prajwal.dto.request.ProfileRequest;
import com.educonnect.prajwal.dto.response.ProfileResponse;
import com.educonnect.prajwal.model.Courses;
import com.educonnect.prajwal.model.Institutes;
import com.educonnect.prajwal.model.Student_Profile;
import com.educonnect.prajwal.model.User;
import com.educonnect.prajwal.repository.CoursesRepository;
import com.educonnect.prajwal.repository.InstitutesRepository;
import com.educonnect.prajwal.repository.Student_ProfileRepository;
import com.educonnect.prajwal.repository.UserRepository;
import com.educonnect.prajwal.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final Student_ProfileRepository student_ProfileRepository;
    private final InstitutesRepository institutesRepository;
    private final CoursesRepository coursesRepository;


    // --------------------------------------------------AUTHENTICATION-----------------------------------------------------------

    @Override
    public void forgotPassword(PasswordRequest request, Principal principal) {
        var user = (User) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();

        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword()))
            throw new IllegalStateException("Wrong password.");

        if (!request.getNewPassword().equals(request.getConfirmationPassword()))
            throw new IllegalStateException("Password mismatch.");

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
    }


     // --------------------------------------------------STUDENT PROFILE-----------------------------------------------------------

    @Override
    public ProfileResponse addProfile(ProfileRequest profileRequest, int id) {
        try {
            // Find the user by ID
            User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("User Not Found"));

            // Create a new Student_Profile instance
            Student_Profile profile = Student_Profile.builder()
                    .firstname(profileRequest.getFirstname())
                    .lastname(profileRequest.getLastname())
                    .middlename(profileRequest.getMiddlename())
                    .age(profileRequest.getAge())
                    .gender(profileRequest.getGender())
                    .birthday(profileRequest.getBirthday())
                    .email(profileRequest.getEmail())
                    .address(profileRequest.getAddress())
                    .city(profileRequest.getCity())
                    .state(profileRequest.getState())
                    .zipcode(profileRequest.getZipcode())
                    .nationality(profileRequest.getNationality())
                    .tenthmark(profileRequest.getTenthmark())
                    .twelvethmark(profileRequest.getTwelvethmark())
                    .phymarks(profileRequest.getPhymarks())
                    .chemmarks(profileRequest.getChemmarks())
                    .mathmarks(profileRequest.getMathmarks())
                    .user(user)
                    .build();

            // Associate the profile with the user
            user.setStudentProfile(profile);

            // Save the user, cascade will save the associated profile
            userRepository.save(user);

            // Optionally, return a response indicating success
            return new ProfileResponse("Profile added successfully");
        } catch (Exception e) {
            // Handle any exceptions
            return new ProfileResponse("Error adding profile: " + e.getMessage());
        }
    }

    @Override
    public ProfileResponse deleteProfile(int id) {

        try{
            User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Details not found"));
            int profile_id = user.getStudentProfile().getId();
            student_ProfileRepository.deleteById(profile_id);
            return new ProfileResponse("Deleted successfully of user "+ user.getUsername());
        }
        catch(Exception e){
            return new ProfileResponse("Error adding profile: " + e.getMessage());
        }
    }

    @Override
    public ProfileRequest getProfile(int id) {
        try {
            User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Details not found"));
            Student_Profile profile = user.getStudentProfile();
            ProfileRequest response = new ProfileRequest();
            
            response.setId(profile.getId());
            response.setFirstname(profile.getFirstname());
            response.setLastname(profile.getLastname());
            response.setMiddlename(profile.getMiddlename());
            response.setAge(profile.getAge());
            response.setGender(profile.getGender());
            response.setBirthday(profile.getBirthday());
            response.setEmail(profile.getEmail());
            response.setAddress(profile.getAddress());
            response.setCity(profile.getCity());
            response.setState(profile.getState());
            response.setZipcode(profile.getZipcode());
            response.setNationality(profile.getNationality());
            response.setTenthmark(profile.getTenthmark());
            response.setTwelvethmark(profile.getTwelvethmark());
            response.setPhymarks(profile.getPhymarks());
            response.setChemmarks(profile.getChemmarks());
            response.setMathmarks(profile.getMathmarks());
            
            return response;
        } catch (Exception e) {
            throw new RuntimeException("Error retrieving profile details", e);
        }
    }

    @Override
    public void updateProfile(ProfileRequest profile, int id) {
        try {
            User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            Student_Profile studentProfile = user.getStudentProfile();
            if (studentProfile == null) {
                throw new RuntimeException("Student profile not found");
            }

            // Update fields
            studentProfile.setFirstname(profile.getFirstname());
            studentProfile.setLastname(profile.getLastname());
            studentProfile.setMiddlename(profile.getMiddlename());
            studentProfile.setAge(profile.getAge());
            studentProfile.setGender(profile.getGender());
            studentProfile.setBirthday(profile.getBirthday());
            studentProfile.setEmail(profile.getEmail());
            studentProfile.setAddress(profile.getAddress());
            studentProfile.setCity(profile.getCity());
            studentProfile.setState(profile.getState());
            studentProfile.setZipcode(profile.getZipcode());
            studentProfile.setNationality(profile.getNationality());
            studentProfile.setTenthmark(profile.getTenthmark());
            studentProfile.setTwelvethmark(profile.getTwelvethmark());
            studentProfile.setPhymarks(profile.getPhymarks());
            studentProfile.setChemmarks(profile.getChemmarks());
            studentProfile.setMathmarks(profile.getMathmarks());

            // Save the updated profile
            student_ProfileRepository.save(studentProfile);
        } catch (Exception e) {
            throw new RuntimeException("Error updating student profile", e);
        }
    }



 // --------------------------------------------------INSTITUES-----------------------------------------------------------


    @Override
    public Institutes addInstitues(Institutes institutes) {

        return institutesRepository.save(institutes);
        
    }

    @Override
    public List<Institutes> getAllInstitutes() {
        return institutesRepository.findAll();
    }

    @Override
    public void deleteInstitutes(int id) {
        institutesRepository.deleteById(id);
    }

    @Override
    public Institutes updateInstitutes(Institutes updatedInstitutes, int id) {
        // Find the existing Institutes entity by id
        Optional<Institutes> optionalInstitutes = institutesRepository.findById(id);
        Institutes existingInstitutes = optionalInstitutes.orElseThrow(() -> new RuntimeException("Institutes not found with id: " + id));

        // Update the existing Institutes entity with the new values
        existingInstitutes.setName(updatedInstitutes.getName());
        existingInstitutes.setAutonomous(updatedInstitutes.isAutonomous());
        existingInstitutes.setAddress(updatedInstitutes.getAddress());
        existingInstitutes.setCity(updatedInstitutes.getCity());
        existingInstitutes.setRating(updatedInstitutes.getRating());
        existingInstitutes.setDescription(updatedInstitutes.getDescription());
        existingInstitutes.setMobile(updatedInstitutes.getMobile());
        existingInstitutes.setEmail(updatedInstitutes.getEmail());
        // Add other properties as needed

        // Use saveAndFlush to update the entity in the database immediately
        return institutesRepository.saveAndFlush(existingInstitutes);
    }




 // --------------------------------------------------COURSES-----------------------------------------------------------



    @Override
    public Courses addCourses(Courses courses) {
        return coursesRepository.save(courses);
    }

    @Override
    public Courses updateCourses(Courses updatedCourses, int id) {
        // Find the existing Courses entity by id
        Optional<Courses> optionalCourses = coursesRepository.findById(id);
        Courses existingCourses = optionalCourses.orElseThrow(() -> new RuntimeException("Courses not found with id: " + id));

        // Update the existing Courses entity with the new values
        existingCourses.setName(updatedCourses.getName());
        existingCourses.setDescription(updatedCourses.getDescription());
        existingCourses.setFee(updatedCourses.getFee());
        existingCourses.setSeats(updatedCourses.getSeats());
        existingCourses.setTimeperiod(updatedCourses.getTimeperiod());
        // Add other properties as needed

        // Use saveAndFlush to update the entity in the database immediately
        return coursesRepository.saveAndFlush(existingCourses);
    }

    @Override
    public List<Courses> getAllCourses() {
        return coursesRepository.findAll();
    }

    @Override
    public void deleteCourses(int id) {
        coursesRepository.deleteById(id);
    }

//src mvn mvn cmd pom
}