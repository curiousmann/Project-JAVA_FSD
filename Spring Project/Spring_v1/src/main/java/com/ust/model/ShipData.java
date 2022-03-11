package com.ust.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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

 @NonNull
 	private Integer userId;
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer regId;

 	private String userType;  			 			

 	private String pass; 

 	private String name;

 	private Integer phn;

 	private String email; 
 
 	private String addr; 

 	private String empAtt;

 	private String tskDtl;

 	private Boolean tskSts;

 	private String pchsId;

 	private String eqmtNm;

 	private String itmPrc;

 	private Boolean itmInstSts; 
	
}