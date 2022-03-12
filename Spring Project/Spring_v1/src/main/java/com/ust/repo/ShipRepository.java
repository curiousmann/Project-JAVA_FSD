package com.ust.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.model.ShipData;

@Repository
public interface ShipRepository extends JpaRepository<ShipData,Integer> {
	Optional<ShipData> findByUserId(Integer UserId);
}
