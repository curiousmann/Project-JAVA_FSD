package com.ust.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ust.model.ShipData;

@Service
public interface IShipService {

	public String saveShip(ShipData s);  	
	public List<ShipData> getAllShips();  	
	public Optional<ShipData> getOneShip(String id);  
	public boolean isExist(Integer id);  	
	public void deleteShip(Integer id); 

}
