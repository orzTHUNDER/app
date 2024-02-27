package com.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.User;
import com.hackathon.service.UserService;

@RestController


public class UserController {
	@Autowired
	 private  UserService userService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	 @PostMapping("/registration")
	    public ResponseEntity<String> registerUser(@RequestBody User user) {
	        try {
	            userService.registerUser(user);
	            return ResponseEntity.ok().body("{\"status\": \"Registration successful\"}");
	            
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed: " + e.getMessage());
	        }
	    }
	

}
