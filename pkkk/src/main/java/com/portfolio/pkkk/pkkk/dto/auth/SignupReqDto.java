package com.portfolio.pkkk.pkkk.dto.auth;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.portfolio.pkkk.pkkk.entity.User;
import com.portfolio.pkkk.pkkk.entity.UserDetail;

import lombok.Data;

@Data
public class SignupReqDto { 
	
	@Email
	@NotBlank (message = "이메일을 입력하세요.")
	private String username;
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
			message = "비밀번호는 영문자, 숫자, 특수문자를 포험하여 8 ~ 16자로 작성") 
	private String password;
	
	@Pattern(regexp = "^[가-힣]{2,7}$",
			message = "한글이름만 작성 가능합니다.")
	private String name;

	
	public User toEntity() {
	    UserDetail userDetail = UserDetail.builder().name(name).build();
	    return User.builder()
	        .username(username)
	        .password(new BCryptPasswordEncoder().encode(password))
	        .userDetail(userDetail)
	        .build();
	}
}
