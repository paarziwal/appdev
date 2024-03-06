package com.educonnect.prajwal.controller;

import static com.educonnect.prajwal.utils.MyConstant.FORGOT_PASSWORD;
import static com.educonnect.prajwal.utils.MyConstant.USER;

import java.security.Principal;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.prajwal.dto.request.PasswordRequest;
import com.educonnect.prajwal.dto.request.ProfileRequest;
import com.educonnect.prajwal.model.Courses;
import com.educonnect.prajwal.model.Institutes;
import com.educonnect.prajwal.service.UserService;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(USER)
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
@Tag(name = "USER")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    

    @GetMapping
    // @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    public String get() {
        return "GET:: user controller";
    }

    @PatchMapping(FORGOT_PASSWORD)
    // @PreAuthorize("hasAnyAuthority('user:update', 'admin:update')")
    // @Hidden
    public ResponseEntity<?> forgotPassword(PasswordRequest request, Principal principal) {
        userService.forgotPassword(request, principal);
        return ResponseEntity.ok().body("Password changed successfully");
    }


    // Student Profile
    // @PreAuthorize("hasAnyAuthority('user:create', 'admin:create')")
    // @Hidden
    @PostMapping("add-profile/{id}")
    public ResponseEntity<?> postStudentProfile(@RequestBody ProfileRequest profile, @RequestParam int id) {
        userService.addProfile(profile, id);
        return ResponseEntity.ok().body("Student Profile Updated Successfully");
    }

    // @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    // @Hidden
    @GetMapping("get-profile")
    public ResponseEntity<?> getStudentProfile(@RequestParam int id) {        
        return ResponseEntity.ok().body(userService.getProfile(id));
    }

    // @PreAuthorize("hasAnyAuthority('user:delete', 'admin:delete')")
    // @Hidden
    @DeleteMapping("delete-profile/{id}")
    public ResponseEntity<?> deleteStudentProfile(@RequestParam int id){
        userService.deleteProfile(id);
        return ResponseEntity.ok().body("User deleted Successfully");
    }


    // @PreAuthorize("hasAnyAuthority('user:update', 'admin:update')")
    // @Hidden
    @PatchMapping("/update-profile/{id}")
    public ResponseEntity<?> updateStudentProfile(@RequestBody ProfileRequest profile, @PathVariable int id) {
        try {
            userService.updateProfile(profile, id);
            return ResponseEntity.ok().body("Student Profile Updated Successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating student profile");
        }
    } 
    
    
    // -------------------------------------------------Institutes-------------------------------------------------------


    // @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    // @Hidden
    @GetMapping("/get-institutes")
    public ResponseEntity<?> getInstitutes(){
        try{
            return ResponseEntity.ok().body(userService.getAllInstitutes());
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error getting Institutes");

        }
    }

    // -------------------------------------------COURSES---------------------------------------------------------------

    // @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    // @Hidden
    @GetMapping("/get-courses")
    public ResponseEntity<?> getCourses(){
        try{
            return ResponseEntity.ok().body(userService.getAllCourses());
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error getting Courses");

        }
    }

}
