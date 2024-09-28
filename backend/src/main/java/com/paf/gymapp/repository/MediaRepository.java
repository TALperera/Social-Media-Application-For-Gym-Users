package com.spring.postplan.repository;

import com.spring.postplan.entity.MediaEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MediaRepository extends MongoRepository<MediaEntity, String> {
}