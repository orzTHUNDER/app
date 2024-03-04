package com.sb.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.sb.demo.DTO.TeamDTO.CreateTeamDTO;
import com.sb.demo.bean.Team;
import com.sb.demo.service.TeamService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class TeamController {

    @Autowired
    private TeamService teamService;

    @PostMapping("/create-team")
    public ResponseEntity<?> createTeam(@RequestBody CreateTeamDTO team) {
        // TODO: process POST request
        return teamService.addTeam(team);

    }

}
