package com.sb.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sb.demo.DTO.TeamDTO.CreateTeamDTO;
import com.sb.demo.bean.Team;
import com.sb.demo.bean.User;
import com.sb.demo.repo.TeamRepo;
import com.sb.demo.repo.UserRepo;

@Service
public class TeamService {

    @Autowired
    private TeamRepo teamRepo;
    @Autowired
    private UserRepo userRepo;

    public ResponseEntity<?> addTeam(CreateTeamDTO team) {
        if (teamRepo.existsByTeamName(team.getTeamName())) {
            return ResponseEntity.badRequest().body("Team name is already taken");
        }
        // members ---> contains the userName of the memebers in the team
        List<String> members = team.getMembers();
        List<User> teamMembers = new ArrayList<>();
        boolean allNoTeam = true;
        for (String member : members) {
            if (userRepo.existsByUsername(member)) {
                User u = userRepo.findByUsername(member);
                if (u.getTeam() != null) {
                    allNoTeam = false;
                    return ResponseEntity.badRequest().body("User " + u.getUsername() + " is already in a team");
                } else {
                    teamMembers.add(u);
                }
            } else {
                return ResponseEntity.badRequest().body("User " + member + " does not exist");
            }
        }
        if (allNoTeam) {
            Team t = new Team(team.getTeamName(), team.getLeaderId(), teamMembers);
            teamRepo.saveAndFlush(t);
            for (User teamMember : teamMembers) {
                teamMember.setTeam(t);
                userRepo.saveAndFlush(teamMember);
            }
            return ResponseEntity.ok("Team " + team.getTeamName() + " created successfully");
        } else {
            return ResponseEntity.badRequest().body("There was a issuse in team creation");
        }
    }
}
