package com.portfolio.pkkk.pkkk.Controller.addvice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.portfolio.pkkk.pkkk.dto.common.ErrorResponseDto;
import com.portfolio.pkkk.pkkk.exception.CustomException;

@RestControllerAdvice
public class AdviceController {

	@ExceptionHandler(CustomException.class)
	public ResponseEntity<?> CustomException(CustomException e) {
		return ResponseEntity.ok().body(new ErrorResponseDto<>(e.getMessage(), e.getErrorrMap()));
	}
}
