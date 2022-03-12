package com.ust.shipimpl;

import java.util.List; 
import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;

import com.ust.model.ShipData;
import com.ust.repo.ShipRepository;
import com.ust.service.IShipService; 

@Service 
public class ShipServiceImpl implements IShipService {

	@Autowired 
	private ShipRepository repo; //HAS-A 

	@Override
	public Integer saveShip(ShipData s) {
		return repo.save(s).getUserId();
	}

	@Override 
	public List<ShipData> getAllShips() {  	 		
		return repo.findAll();
	} 

	@Override 
	public Optional<ShipData> getOneShip(Integer id) { 
		return repo.findByUserId(id); 
	} 

	@Override 
	public void deleteShip(Integer id) {  	 				
		repo.deleteById(id); 
	} 

	@Override 
	public boolean isExist(Integer id) {  	
		return repo.existsById(id); 
	}


}
