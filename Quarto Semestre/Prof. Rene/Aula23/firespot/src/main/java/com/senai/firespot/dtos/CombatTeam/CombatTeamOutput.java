package com.senai.firespot.dtos.CombatTeam;

import java.util.List;

import com.senai.firespot.entities.Leader;
import com.senai.firespot.entities.ParkAddress;
import com.senai.firespot.entities.User;

public record CombatTeamOutput(

    Long id,
    Integer numberMembers,
    List<User> users,
    Leader leader,
    ParkAddress parkAddress
){}
