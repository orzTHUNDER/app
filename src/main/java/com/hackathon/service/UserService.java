package com.hackathon.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.hackathon.model.User;
import com.hackathon.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ResponseEntity<?> signUp(User user) {
        System.out.println("----------------------------------------------------");
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use");
        }

        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        User savedUser = userRepository.saveAndFlush(user);

        Map<String, Object> response = new HashMap<>();
        response.put("message", "User registered successfully");
        response.put("user", savedUser);

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<?> login(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            User u = userRepository.findByEmail(user.getEmail());
            if (passwordEncoder.matches(user.getPassword(), u.getPassword())) {
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login Successfull!");
                response.put("user", u);
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.badRequest().body("Invalid password");
            }
        } else {
            return ResponseEntity.badRequest().body("Email does not exist");
        }
    }

}
