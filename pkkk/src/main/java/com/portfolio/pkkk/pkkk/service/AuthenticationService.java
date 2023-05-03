package com.portfolio.pkkk.pkkk.service;

import org.springframework.stereotype.Service;

import com.portfolio.pkkk.pkkk.exception.CustomException;
import com.portfolio.pkkk.pkkk.exception.ErrorMap;
import com.portfolio.pkkk.pkkk.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepository userRepository;
	
	public void checkDuplicatedUsername(String username) {
		if(userRepository.findUserByUsername(username) != null) {
			throw new CustomException("Duplicated Username", ErrorMap.builder()
					.put("username", "이미 사용중인 아이디입니다.")
					.build());
		}
	}
}
