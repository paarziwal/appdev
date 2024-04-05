package com.example.edugateway_backend.service;

import com.example.edugateway_backend.entity.Courses;
import com.example.edugateway_backend.entity.Institute; // Import Institute
import com.example.edugateway_backend.repository.CoursesRepo;
import com.example.edugateway_backend.repository.InstituteRepo; // Import InstituteRepo
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepo coursesRepository;

    @Autowired
    private InstituteRepo instituteRepository;

    public Courses createCourse(Long instituteId, Courses course) {
        Institute institute = instituteRepository.findById(instituteId).orElse(null);
        if (institute != null) {
            course.setInstitute(institute);
            return coursesRepository.save(course);
        }
        return null;
    }
    public List<Courses> getAllCourses() {
        return coursesRepository.findAll();
    }
    public Courses getCourseById(Long courseId) {
        return coursesRepository.findById(courseId).orElse(null);
    }

    public Courses updateCourse(Long courseId, Courses updatedCourse) {
        Optional<Courses> optionalCourse = coursesRepository.findById(courseId);
        if (optionalCourse.isPresent()) {
            Courses existingCourse = optionalCourse.get();
            existingCourse.setCourseName(updatedCourse.getCourseName());
            existingCourse.setCourseDuration(updatedCourse.getCourseDuration());
            existingCourse.setFees(updatedCourse.getFees());
            existingCourse.setNoOfSeats(updatedCourse.getNoOfSeats());
            return coursesRepository.save(existingCourse);
        }
        return null;
    }

    public boolean deleteCourse(Long courseId) {
        coursesRepository.deleteById(courseId);
        return true;
    }
}
