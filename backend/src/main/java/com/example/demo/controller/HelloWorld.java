package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloWorld {
    
    @GetMapping("/hello-world")
    public String helloWorld() {
        // System.out.println("Running loop to use up some memory...");

        // String s = "";
        // for (int i = 0; i < 32767; i++) {
        //     s += "s";
        // }

        System.out.println("Received Hello World Request");
        return "Hello World!";
    }

}
