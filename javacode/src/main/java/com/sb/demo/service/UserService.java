package com.sb.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sb.demo.bean.User;
import com.sb.demo.repo.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public ResponseEntity<?> addUser(User user) {
        if (userRepo.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already taken");
        } else if (userRepo.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already taken");
        } else {
            userRepo.saveAndFlush(user);
            return ResponseEntity.ok("User added successfully");
        }
    }

    public ResponseEntity<?> login(User user) {

        System.out.println(user);
        // TODO Auto-generated method stub
        User u = userRepo.findByEmail(user.getEmail());
        System.out.println(u);
        if (u != null && (u.getEmail().equals(user.getEmail())) && u.getPassword().equals(user.getPassword())) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("userId", u.getId());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
    }

    public List<User> retriveAllUser() {
        return userRepo.findAll();
    }
}
