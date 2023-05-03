package com.portfolio.pkkk.pkkk.Controller.authentication;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.pkkk.pkkk.aop.anonotation.ValidAspect;
import com.portfolio.pkkk.pkkk.dto.auth.SignupReqDto;
import com.portfolio.pkkk.pkkk.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthticationController {
	
	private final AuthenticationService authenticationService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login() {
		return ResponseEntity.ok(null);
	}

	@CrossOrigin
	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {
		System.out.println(signupReqDto);
		authenticationService.checkDuplicatedUsername(signupReqDto.getUsername());
		return ResponseEntity.ok(null);
	}
}
