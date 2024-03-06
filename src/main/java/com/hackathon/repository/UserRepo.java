package com.hackathon.repository;

import org.springframework.stereotype.Repository;

import com.hackathon.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    boolean existsByEmail(String email);

    User findByEmail(String email);
}
