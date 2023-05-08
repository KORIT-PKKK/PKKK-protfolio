package com.portfolio.pkkk.pkkk.exception;

import java.util.Map;
import java.util.zip.CheckedOutputStream;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {
	
	private Map<String, String> errorrMap;
	
	public CustomException(String message) {
		super(message);
	}
	
	public CustomException(String message, Map<String, String> errorMap) { 
		super(message);
		this.errorrMap = errorMap;
	}
}