package com.sb.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sb.demo.bean.User;
import com.sb.demo.service.UserService;
import com.sb.demo.bean.User;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        // TODO: process POST request
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        // TODO: process POST request

        return userService.login(user);
    }

    @GetMapping("/allUser")
    public List<User> getAllUser() {
        return userService.retriveAllUser();
    }

}
