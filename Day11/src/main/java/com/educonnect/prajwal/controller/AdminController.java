package com.educonnect.prajwal.controller;

import static com.educonnect.prajwal.utils.MyConstant.ADMIN;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.prajwal.model.Courses;
import com.educonnect.prajwal.model.Institutes;
import com.educonnect.prajwal.service.UserService;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(ADMIN)
@PreAuthorize("hasRole('ADMIN')")
@Tag(name = "Admin")
public class AdminController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public String get() {
        return "GET:: admin controller";
    }

    @PostMapping
    @PreAuthorize("hasAuthority('admin:create')")
    @Hidden
    public String post() {
        return "POST:: admin controller";
    }

    @PutMapping
    @PreAuthorize("hasAuthority('admin:update')")
    @Hidden
    public String put() {
        return "PUT:: admin controller";
    }

    @DeleteMapping
    @PreAuthorize("hasAuthority('admin:delete')")
    @Hidden
    public String delete() {
        return "DELETE:: admin controller";
    }


// -------------------------------------------------Institutes-------------------------------------------------------



    @PostMapping("add-institutes")
    @PreAuthorize("hasAuthority('admin:create')")
    // @Hidden
    public ResponseEntity<?> addInstitues(@RequestBody Institutes institutes){
        try{
            return ResponseEntity.ok().body(userService.addInstitues(institutes));
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Adding Institutes");

        }
    }

    @PreAuthorize("hasAuthority('admin:update')")
    // @Hidden
    @PatchMapping("update-institutes/{id}")
    public ResponseEntity<?> UpdateInstitues(@RequestBody Institutes institutes, @RequestParam int id){
        try{
            return ResponseEntity.ok().body(userService.updateInstitutes(institutes, id));
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Updating Institutes");

        }
    }
    @PreAuthorize("hasAuthority('admin:delete')")
    // @Hidden
    @DeleteMapping("delete-institues/{id}")
    public ResponseEntity<?> DeleteInstitues(@RequestParam int id){
        try{
            userService.deleteInstitutes(id);
            return ResponseEntity.ok().body("Deleted Successfull with id "+id);
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Deleting Institutes");

        }
    }



    // -------------------------------------------COURSES---------------------------------------------------------------


    @PreAuthorize("hasAuthority('admin:create')")
    // @Hidden
    @PostMapping("add-courses")
    public ResponseEntity<?> addCourses(@RequestBody Courses courses){
        try{
            return ResponseEntity.ok().body(userService.addCourses(courses));
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Adding Courses");

        }
    }


    @PreAuthorize("hasAuthority('admin:update')")
    // @Hidden
    @PatchMapping("update-courses/{id}")
    public ResponseEntity<?> UpdateCourses(@RequestBody Courses courses, @RequestParam int id){
        try{
            return ResponseEntity.ok().body(userService.updateCourses(courses, id));
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Updating Courses");

        }
    }

    // @PreAuthorize("hasAuthority('admin:delete')")
    // @Hidden
    @DeleteMapping("delete-courses/{id}")
    public ResponseEntity<?> DeleteCourses(@RequestParam int id){
        try{
            userService.deleteCourses(id);
            return ResponseEntity.ok().body("Deleted Successfull with id "+id);
            
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Deleting Courses");

        }
    }
}