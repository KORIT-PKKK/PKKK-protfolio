package com.portfolio.pkkk.pkkk.exception;

import java.util.Map;
import java.util.zip.CheckedOutputStream;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {

	private static final long serialVersionUID = -794630080252143530L;
	
	private Map<String, String> errorrMap;
	
	public CustomException(String message) {
		super(message);
	}
	
	public CustomException(String message, Map<String, String> errorMap) { 
		super(message);
		this.errorrMap = errorMap;
	}
}