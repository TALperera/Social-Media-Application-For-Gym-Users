package com.paf.gymapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.paf.gymapp.model.Workoutstatus;

public interface workoutStatusRepo extends MongoRepository<Workoutstatus, String> {

}
