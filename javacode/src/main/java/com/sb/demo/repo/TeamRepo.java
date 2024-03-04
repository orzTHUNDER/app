package com.sb.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sb.demo.bean.Team;

@Repository
public interface TeamRepo extends JpaRepository<Team, Integer> {

}
