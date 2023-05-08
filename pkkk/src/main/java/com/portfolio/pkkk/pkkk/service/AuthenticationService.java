package com.portfolio.pkkk.pkkk.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.portfolio.pkkk.pkkk.dto.auth.SignupReqDto;
import com.portfolio.pkkk.pkkk.entity.Authority;
import com.portfolio.pkkk.pkkk.entity.User;
import com.portfolio.pkkk.pkkk.exception.CustomException;
import com.portfolio.pkkk.pkkk.exception.ErrorMap;
import com.portfolio.pkkk.pkkk.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class AuthenticationService implements UserDetailsService {	
	
	private final UserRepository userRepository;
	
	public void checkDuplicatedUsername(String username) { 
		User user = userRepository.findUserByUsername(username);
		if(user != null) {
			throw new CustomException("Duplicated username", 
					ErrorMap.builder().put("username", "사용중인 아이디입니다..")
							.build());
		}
	}
	// 자동으로 인덱스1번 권한 주는 메소드
	public void signup(SignupReqDto signupReqDto) {
		User userEntity = signupReqDto.toEntity();
		userRepository.saveUser(userEntity);
		userRepository.saveAuthority(Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(1)
				.build());
	}
	
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User userEntity = userRepository.findUserByUsername(username);
		
		if(userEntity == null) {
			throw new CustomException("로그인 실패", ErrorMap.builder().put("username", "사용자 정보를 확인하세요.").build());
		}
		
		return userEntity.toPrincipal();
	}
	
//	public String signUp() {
//		return userRepository.getUserSignUp();
//	}
}

