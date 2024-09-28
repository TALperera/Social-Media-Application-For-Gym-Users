package com.paf.gymapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.paf.gymapp.model.mealDTO;

@Repository
public interface mealRepository extends MongoRepository<mealDTO, String>{

    
    
}
