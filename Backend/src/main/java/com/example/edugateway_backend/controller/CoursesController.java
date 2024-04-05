package com.example.edugateway_backend.controller;

import com.example.edugateway_backend.entity.Courses;
import com.example.edugateway_backend.service.CoursesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/courses")
public class CoursesController {

    @Autowired
    private CoursesService coursesService;
    @GetMapping
    public List<Courses> getAllCourses() {
        return coursesService.getAllCourses();
    }
    
    @PostMapping("/{instituteId}")
    public ResponseEntity<Courses> createCourse(@PathVariable Long instituteId, @RequestBody Courses course) {
        Courses createdCourse = coursesService.createCourse(instituteId, course);
        return ResponseEntity.ok(createdCourse);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<Courses> getCourseById(@PathVariable Long courseId) {
        Courses course = coursesService.getCourseById(courseId);
        return ResponseEntity.ok(course);
    }

    @PutMapping("/{courseId}")
    public ResponseEntity<Courses> updateCourse(@PathVariable Long courseId, @RequestBody Courses updatedCourse) {
        Courses course = coursesService.updateCourse(courseId, updatedCourse);
        return ResponseEntity.ok(course);
    }

    @DeleteMapping("/{courseId}")
    public boolean deleteCourse(@PathVariable Long courseId) {
        coursesService.deleteCourse(courseId);
        return true;
    }
}
