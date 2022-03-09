package com.ust.service;

import java.util.List;
import java.util.Optional;

import com.ust.model.Employee;

public interface IStudentService {

	public Integer saveStudent(Employee s);  	
	public List<Employee> getAllStudents();  	
	public Optional<Employee> getOneStudent(Integer id);  
	public boolean isExist(Integer id);  	
	public void deleteStudent(Integer id); 

}
