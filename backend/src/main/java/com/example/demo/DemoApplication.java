package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) throws InterruptedException {
		Thread.sleep((long)(Math.random() * 60000)); // Waits up to 60 seconds
		SpringApplication.run(DemoApplication.class, args);
	}

}
