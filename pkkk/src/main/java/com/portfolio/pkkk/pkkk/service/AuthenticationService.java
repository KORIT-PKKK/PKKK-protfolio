package com.portfolio.pkkk.pkkk.service;

import org.springframework.stereotype.Service;

import com.portfolio.pkkk.pkkk.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepository userRepository;
	
	public void duplicatedUsername(String username) {
		
	}
}
