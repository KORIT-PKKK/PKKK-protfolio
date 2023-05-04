package com.portfolio.pkkk.pkkk.Controller.authentication;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.pkkk.pkkk.aop.anonotation.ValidAspect;
import com.portfolio.pkkk.pkkk.dto.auth.SignUpReqDto;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignUpReqDto signUpReqDto, BindingResult bindingResult) {
		return ResponseEntity.ok().body(null);
	}
}
