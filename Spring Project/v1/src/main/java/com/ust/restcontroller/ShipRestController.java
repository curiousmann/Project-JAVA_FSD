package com.ust.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.CrossOrigin; 
import org.springframework.web.bind.annotation.DeleteMapping; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.PathVariable; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.PutMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RestController;

import com.ust.model.ShipData;
import com.ust.model.Message;

import com.ust.service.IShipService; 


@RestController 
@CrossOrigin(origins = "*") 
@RequestMapping("/rest/ship") 

public class ShipRestController {

	@Autowired 
	private IShipService service; 

	/** 
	 *	1. This method takes Ship object 
	 *	as input from JSON/XML using  	 
	 **    @RequestBody and returns  	 *    ResponseEntity<T>. 
	 *	call service.saveShip(ob)  */ 

	@PostMapping("/save") 
	public ResponseEntity<Message> saveShip( 
			@RequestBody ShipData ship) 
	{ 
		ResponseEntity<Message> resp=null; 
		try { 
			Integer id=service.saveShip(ship);  	 	 	
			resp=new ResponseEntity<Message>(new Message("SUCCESS",id+"-saved"),HttpStatus.OK); 
		} catch (Exception e) {resp=new ResponseEntity<Message>
		(new Message("FAIL","Unable to Save"),HttpStatus.OK); 
		e.printStackTrace(); 
		} 
		return resp; 
	} 

	/*** 
	 *	2. This method reads data from DB 
	 *	using findAll() and returns  
	 *	List<Ship> if data exist  
	 *	or String (not exist) 
	 *	as ResponseEntity using annotation 
	 *	@ResponseBody 
	 */ 
	@GetMapping("/all")  	
	public ResponseEntity<?> getAllShips(){  	 
		ResponseEntity<?> resp=null; 
		try { 
			List<ShipData> list=service.getAllShips(); 
			if(list!=null && !list.isEmpty()) 
				resp=new ResponseEntity<List<ShipData>>(list,HttpStatus.OK); 
			else 
				resp=new ResponseEntity<String>("No Data Found",HttpStatus.OK); 
		} catch (Exception e) { 
			resp=new ResponseEntity<String>("Unable to fetch Data",HttpStatus.INTERNAL_SERVER_ERROR); 
			e.printStackTrace(); 
		} 
		return resp; 
	} 

	/** 
	 *	3. Read PathVariable id (as input) 
	 *	use service layer to find one object 
	 *	based on Id. Return Ship if exist 
	 *	else String (error message) as 
	 *	ResponseEntity<?> 
	 */ 
	@GetMapping("/one/{id}")  	
	public ResponseEntity<?> getOneShip( 
			@PathVariable 
			Integer id) 
	{ 
		ResponseEntity<?> resp=null; 
		try { 
			Optional<ShipData> opt=service.getOneShip(id); 
			if(opt.isPresent())  
				resp=new 
				ResponseEntity<ShipData>(opt.get(),HttpStatus.OK); 
			else 
				resp=new ResponseEntity<String>("No Data Found",HttpStatus.BAD_REQUEST); 
		} catch (Exception e) { 
			resp=new ResponseEntity<String>("Unable to Fetch Data",HttpStatus.INTERNAL_SERVER_ERROR); 
			e.printStackTrace(); 
		} 
		return resp; 
	} 

	/** 
	 *	4. Read pathVariable id 
	 *	check row exist or not 
	 *	if exist call service delete 
	 *	else return String error msg 
	 */ 
	@DeleteMapping("/remove/{id}") 
	public ResponseEntity<Message> deleteShip( 
			@PathVariable 
			Integer id) 
	{ 
		System.out.println("welcome");  	 	
		ResponseEntity<Message> resp=null; 
		try { 
			boolean exist=service.isExist(id); 
			if(exist) {  	 	 	 	
				service.deleteShip(id);  	 	 	 	
				resp=new ResponseEntity<Message>
				(new Message("SUCCESSS",id+"-removed"),HttpStatus.OK); 
			}else { 
				resp=new ResponseEntity<Message>
				(new Message("FAIL",id+"-Not Exist"),HttpStatus.BAD_REQUEST); 
			} 
		} catch (Exception e) { 
			resp=new ResponseEntity<Message>
			(new Message("FAIL","Unable to Delete"),HttpStatus.INTERNAL_SERVER_ERROR); 
			e.printStackTrace(); 
		} 

		return resp; 
	} 

	/** 
	 *	5. Read Input as JSON/XML using 
	 *	@RequestBody , check id exist or not 
	 *	if exist call service save method 
	 *	Return ResponseeEntity 
	 */ 
	@PutMapping("/update")  	
	public ResponseEntity<Message> updateShip( 
			@RequestBody ShipData ship) {  	 	
		ResponseEntity<Message> resp=null; 
		try { 
			boolean exist=service.isExist(ship.getUserId()); 
			if(exist) { 
				service.saveShip(ship); 
				resp=new ResponseEntity<Message>(new Message("OK",ship.getUserId()+"-Updated"),HttpStatus.OK); 
			}else { 
				resp=new ResponseEntity<Message>(new Message("OK",ship.getUserId()+"-Not Exist"),HttpStatus.BAD_REQUEST); 
			} 
		} catch (Exception e) { 
			resp=new ResponseEntity<Message>(new Message("OK","Unable to Update"),HttpStatus.INTERNAL_SERVER_ERROR); 
			e.printStackTrace(); 
		} 
		return resp; 
	} 

}
