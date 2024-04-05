package com.example.edugateway_backend.service;

import com.example.edugateway_backend.entity.Institute;
import com.example.edugateway_backend.repository.InstituteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstituteService {

    @Autowired
    private InstituteRepo instituteRepository;

    public List<Institute> getAllInstitutes() {
        return instituteRepository.findAll();
    }

    public Institute getInstituteById(Long instituteId) {
        return instituteRepository.findById(instituteId).orElse(null);
    }

    public Institute createInstitute(Institute institute) {
        return instituteRepository.save(institute);
    }

    public Institute updateInstitute(Long instituteId, Institute updatedInstitute) {
        Optional<Institute> optionalInstitute = instituteRepository.findById(instituteId);
        if (optionalInstitute.isPresent()) {
            Institute existingInstitute = optionalInstitute.get();
            existingInstitute.setInstituteName(updatedInstitute.getInstituteName());
            existingInstitute.setInstituteAddress(updatedInstitute.getInstituteAddress());
            existingInstitute.setMobile(updatedInstitute.getMobile());
            existingInstitute.setEmail(updatedInstitute.getEmail());
            existingInstitute.setNoOfCoursesAvailable(updatedInstitute.getNoOfCoursesAvailable());

            return instituteRepository.save(existingInstitute);
        }
        return null; // Or throw an exception indicating that the institute with the given ID was not found
    }

    public boolean deleteInstitute(Long instituteId) {
        instituteRepository.deleteById(instituteId);
        return true;
    }
}
