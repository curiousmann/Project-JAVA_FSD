package com.ust.model;

import javax.persistence.Entity; 
//import javax.persistence.GeneratedValue; 
import javax.persistence.Id; 
 
import lombok.AllArgsConstructor; import lombok.Data; 
import lombok.NoArgsConstructor; import lombok.NonNull; 
import lombok.RequiredArgsConstructor; 

@Data 
@NoArgsConstructor 
@RequiredArgsConstructor 
@AllArgsConstructor 	
@Entity 
public class ShipData {

	@Id 
 	//@GeneratedValue  			
 	private Integer UserId;
	@NonNull 
 	private String UserType;  			 			
	@NonNull 
 	private String Pass; 
	@NonNull 
 	private String Name;
	@NonNull 
 	private Integer Phn;
	@NonNull 
 	private String email; 
	@NonNull 
 	private String Addr; 
	@NonNull 
 	private String EmpAtt;
	@NonNull 
 	private String TskDtl;
	@NonNull 
 	private Boolean TskSts;
	@NonNull 
 	private String PchsId;
	@NonNull 
 	private String EqmtNm;
	@NonNull 
 	private String ItmPrc;
	@NonNull 
 	private Boolean ItmInstSts; 
	
}