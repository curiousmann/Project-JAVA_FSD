package com.ust.studentimpl;

import java.util.List; 
import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;

import com.ust.model.Employee;
import com.ust.repo.StudentRepository;
import com.ust.service.IStudentService; 

@Service 
public class StudentServiceImpl implements IStudentService {

	@Autowired 
	private StudentRepository repo; //HAS-A 

	@Override
	public Integer saveStudent(Employee s) {
		return repo.save(s).getEmpId();
	}

	@Override 
	public List<Employee> getAllStudents() {  	 		
		return repo.findAll();
	} 

	@Override 
	public Optional<Employee> getOneStudent(Integer id) { 
		return repo.findById(id); 
	} 

	@Override 
	public void deleteStudent(Integer id) {  	 				
		repo.deleteById(id); 
	} 

	@Override 
	public boolean isExist(Integer id) {  	
		return repo.existsById(id); 
	}


}
