package com.nexttech.backend.service;

import com.nexttech.backend.model.Inquiry;
import com.nexttech.backend.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    private static final String TO_EMAIL = "info@nexttechengineering.com"; // Your business email

    public Inquiry saveInquiry(Inquiry inquiry) {
        // Save to database
        Inquiry saved = inquiryRepository.save(inquiry);

        // Send email notification
        sendEmailNotification(inquiry);

        return saved;
    }

    private void sendEmailNotification(Inquiry inquiry) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(TO_EMAIL);
        message.setSubject("New Inquiry from " + inquiry.getName());
        message.setText(String.format(
                "New inquiry received:\n\nName: %s\nMobile: %s\nRequirement: %s\nMessage: %s",
                inquiry.getName(),
                inquiry.getMobile(),
                inquiry.getRequirement(),
                inquiry.getMessage()
        ));
        mailSender.send(message);
    }

    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }
}