package com.ust;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.ust"})
public class DemoShipProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoShipProjectApplication.class, args);
	}

}
