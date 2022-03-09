package com.ust.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.model.ShipData;

public interface ShipRepository extends JpaRepository<ShipData,Integer> {

	
}
