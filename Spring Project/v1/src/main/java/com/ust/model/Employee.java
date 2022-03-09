package com.ust.model;

import javax.persistence.Entity; 
import javax.persistence.GeneratedValue; import javax.persistence.Id; 
 
import lombok.AllArgsConstructor; import lombok.Data; 
import lombok.NoArgsConstructor; import lombok.NonNull; 
import lombok.RequiredArgsConstructor; 

@Data 
@NoArgsConstructor 
@RequiredArgsConstructor 
@AllArgsConstructor 	
@Entity 
public class Employee {

	@Id 
 	@GeneratedValue  			
 	private Integer EmpId;  //test
	@NonNull 
 	private String EmpAtt;  			 			
	@NonNull 
 	private String EmpPass; 

}
