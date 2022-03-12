package com.ust.model;

import javax.persistence.Column;
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
 	private String userId;
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer regId;  			 			

 	private String pass; 

 	private String name;
 	
 	@Column(length = 15)
 	private String phon;

 	private String email; 
 	@Column(length = 50)
 	private String addr; 

 	private String empAtt;
 	@Column(length = 50)
 	private String tskDtl;

 	private Boolean tskSts;

 	private String pchsId;

 	private String eqmtNm;

 	private String itmPrc;

 	private Boolean itmInstSts; 
 	
 	private Integer pep;
 	
 	private Integer god;
 	
}