package com.paf.gymapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workoutstatus")
public class Workoutstatus {


    @Id
    private String _id;
    private String runDistance;
    private String pushups;
    private String weightLifted;
    private String fitnessDescription;
    
    public Workoutstatus(String _id, String runDistance, String pushups, String weightLifted,
            String fitnessDescription) {
        this._id = _id;
        this.runDistance = runDistance;
        this.pushups = pushups;
        this.weightLifted = weightLifted;
        this.fitnessDescription = fitnessDescription;
    }



    public Workoutstatus() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getRunDistance() {
        return runDistance;
    }

    public void setRunDistance(String runDistance) {
        this.runDistance = runDistance;
    }

    public String getPushups() {
        return pushups;
    }

    public void setPushups(String pushups) {
        this.pushups = pushups;
    }

    public String getWeightLifted() {
        return weightLifted;
    }

    public void setWeightLifted(String weightLifted) {
        this.weightLifted = weightLifted;
    }

    public String getFitnessDescription() {
        return fitnessDescription;
    }

    public void setFitnessDescription(String fitnessDescription) {
        this.fitnessDescription = fitnessDescription;
    }



    @Override
    public String toString() {
        return "Workoutstatus [_id=" + _id + ", runDistance=" + runDistance + ", pushups=" + pushups + ", weightLifted="
                + weightLifted + ", fitnessDescription=" + fitnessDescription + "]";
    }

    

}
