package com.sb.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sb.demo.repo.TeamRepo;

@Service
public class TeamService {

    @Autowired
    private TeamRepo teamRepo;
}
