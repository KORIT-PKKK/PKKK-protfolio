package com.portfolio.pkkk.pkkk.controller.authentication;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	
	private AuthenticationService authenticationService;
	
    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

	public ResponseEntity<?> login() {
		return ResponseEntity.ok().body(null);
	}
	
	@CrossOrigin
	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@Valid  @RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {
		System.out.println(signupReqDto);
		authenticationService.checkDuplicatedUsername(signupReqDto.getUsername());
		System.out.println(signupReqDto.getUsername());
		authenticationService.signup(signupReqDto);
		return ResponseEntity.ok().body(true);
	}
	
}
