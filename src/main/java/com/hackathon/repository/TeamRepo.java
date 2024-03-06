package com.hackathon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.model.Team;

@Repository
public interface TeamRepo extends JpaRepository<Team, Integer> {

}