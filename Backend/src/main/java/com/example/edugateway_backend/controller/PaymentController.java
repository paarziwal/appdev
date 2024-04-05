package com.example.edugateway_backend.controller;

import com.example.edugateway_backend.entity.Admission;
import com.example.edugateway_backend.entity.Payment;
import com.example.edugateway_backend.service.AdmissionService;
import com.example.edugateway_backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;
    @Autowired
    private AdmissionService admissionService;

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{paymentId}")
    public Payment getPaymentById(@PathVariable Long paymentId) {
        return paymentService.getPaymentById(paymentId);
    }

    @PostMapping
    public Payment createPayment(@RequestParam(value = "admissionId", required = false) Long admissionId,
                                     @RequestBody Payment payment) {
        if (admissionId != null) {
            Admission admission = admissionService.getAdmissionById(admissionId);
            if (admission != null) {
                payment.setAdmission(admission);
            } else {
                // Handle case where studentId does not correspond to any student
                // You can throw an exception or return an appropriate response
            }
        }

        return paymentService.createPayment(payment);
    }

    @PutMapping("/{paymentId}")
    public Payment updatePayment(@PathVariable Long paymentId, @RequestBody Payment updatedPayment) {
        return paymentService.updatePayment(paymentId, updatedPayment);
    }

    @DeleteMapping("/{paymentId}")
    public boolean deletePayment(@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);
        return true;
    }
}
