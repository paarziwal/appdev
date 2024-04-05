package com.example.edugateway_backend.service;

import com.example.edugateway_backend.entity.Payment;
import com.example.edugateway_backend.repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepo paymentRepository;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(Long paymentId) {
        Optional<Payment> optionalPayment = paymentRepository.findById(paymentId);
        return optionalPayment.orElse(null);
    }

    public Payment createPayment(Payment payment) {
        // You might want to add validation logic or other business logic before saving
        return paymentRepository.save(payment);
    }

    public Payment updatePayment(Long paymentId, Payment updatedPayment) {
        Optional<Payment> optionalPayment = paymentRepository.findById(paymentId);
        if (optionalPayment.isPresent()) {
            // Update the existing payment with the new information
            Payment existingPayment = optionalPayment.get();
            // Set updated fields
            existingPayment.setStatus(updatedPayment.getStatus());
            existingPayment.setAmountPaid(updatedPayment.getAmountPaid());
            existingPayment.setPaymentDate(updatedPayment.getPaymentDate());
            existingPayment.setModeOfPayment(updatedPayment.getModeOfPayment());
            // Update other fields as needed

            // Save the updated payment
            return paymentRepository.save(existingPayment);
        }
        return null; // Or throw an exception indicating that the payment with the given ID was not found
    }

    public boolean deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
        return true;
    }
}
