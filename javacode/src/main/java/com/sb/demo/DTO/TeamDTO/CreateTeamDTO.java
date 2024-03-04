package com.sb.demo.DTO.TeamDTO;

import java.util.List;

public class CreateTeamDTO {

    private String TeamName;
    private int leaderId;
    private List<String> members;

    public CreateTeamDTO(String teamName, int leaderId, List<String> memebers) {
        TeamName = teamName;
        this.leaderId = leaderId;
        this.members = memebers;
    }

    public String getTeamName() {
        return TeamName;
    }

    public void setTeamName(String teamName) {
        TeamName = teamName;
    }

    public int getLeaderId() {
        return leaderId;
    }

    public void setLeaderId(int leaderId) {
        this.leaderId = leaderId;
    }

    public List<String> getMembers() {
        return members;
    }

    public void setMembers(List<String> memebers) {
        this.members = memebers;
    }

    @Override
    public String toString() {
        return "createTeamDTO{" +
                "TeamName='" + TeamName + '\'' +
                ", leaderId=" + leaderId +
                ", memebers=" + members +
                '}';
    }

}
