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

@RestController
@RequestMapping("/auth")
public class AuthticationController {
	
	@PostMapping("/login")
	public ResponseEntity<?> login() {
		return ResponseEntity.ok(null);
	}

	@CrossOrigin
	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {
		System.out.println("signup실행");
		System.out.println(signupReqDto);
		return ResponseEntity.ok(null);
	}
}
