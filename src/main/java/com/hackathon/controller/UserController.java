package com.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.model.User;
import com.hackathon.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        System.out.println(user);
        return userService.signUp(user);
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody User user) {
        // TODO: process POST request
        return userService.login(user);

    }

}
