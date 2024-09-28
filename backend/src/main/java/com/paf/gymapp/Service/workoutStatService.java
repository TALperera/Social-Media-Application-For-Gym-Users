package com.paf.gymapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf.gymapp.model.Workoutstatus;
import com.paf.gymapp.repository.workoutStatusRepo;

@Service
public class workoutStatService {

    @Autowired
    private workoutStatusRepo workoutStatusRepo;

    public void saveorUpdate(Workoutstatus workoutstatus) {

        workoutStatusRepo.save(workoutstatus);

    }

    public Iterable<Workoutstatus> listAll() {
        
        return this.workoutStatusRepo.findAll();
    }

    public void deletestatus(String _id) {
        
        this.workoutStatusRepo.deleteById(_id);
    }

    public Workoutstatus getstatusById(String statusid) {
        
        return this.workoutStatusRepo.findById(statusid).get();
    }

}
