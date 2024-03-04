package com.sb.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * helloController
 */

@RestController
public class helloController {

    @GetMapping("/hello")
    public @ResponseBody String getMethodName() {
        return "HI!";
    }

    @GetMapping("/hello/{name}")
    public @ResponseBody String getNameInParam(@PathVariable String name) {
        return "HI!" + name;
    }

    @GetMapping("/hello/{firstName}/{lastName}")
    public @ResponseBody String getNameInParam(@PathVariable String firstName, @PathVariable String lastName) {
        return "HI! " + firstName + " " + lastName;
    }

}