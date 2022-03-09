package com.ust.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.model.Employee;

public interface StudentRepository extends JpaRepository<Employee,Integer> {

	
}
