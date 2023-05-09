package com.projectapp.pkkkplaces.controller;

import com.projectapp.pkkkplaces.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserCtrl {

    private final UserRepo userRepo;

    @GetMapping("/user/outline/{userId}")
    public ResponseEntity<?> getUserOutline(@PathVariable int userId){
        return ResponseEntity.ok().body(userRepo.getUserOutline(userId));
    }
}
