package com.example.edugateway_backend.service;

import com.example.edugateway_backend.entity.Student;
import com.example.edugateway_backend.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long studentId) {
        return studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    

public Student updateStudent(Long studentId, Student updatedStudent) {
    // Retrieve the existing student by user_id
    Student existingStudent = studentRepository.findByUserId(updatedStudent.getUser().getId());

    if (existingStudent != null) {
        // Update the existing student
        existingStudent.setName(updatedStudent.getName());
        existingStudent.setDob(updatedStudent.getDob());
        existingStudent.setGender(updatedStudent.getGender());
        existingStudent.setMotherName(updatedStudent.getMotherName());
        existingStudent.setFatherName(updatedStudent.getFatherName());
        existingStudent.setNationality(updatedStudent.getNationality());
        existingStudent.setAge(updatedStudent.getAge());
        existingStudent.setAddress(updatedStudent.getAddress());
        existingStudent.setMobile(updatedStudent.getMobile());
        existingStudent.setMarksSSLC(updatedStudent.getMarksSSLC());
        existingStudent.setMarksHSC(updatedStudent.getMarksHSC());

        // Update other fields as needed

        // Save the updated student
        return studentRepository.save(existingStudent);
    } else {
        // Create a new student if not found
        return studentRepository.save(updatedStudent);
    }
}
    

    public boolean deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
        return true;
    }
}
