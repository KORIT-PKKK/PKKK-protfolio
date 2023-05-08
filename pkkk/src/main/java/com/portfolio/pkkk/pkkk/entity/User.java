package com.portfolio.pkkk.pkkk.entity;

import java.util.List;

import com.portfolio.pkkk.pkkk.PrincipalUser;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class User {

	private int userId;
	private String username;
	private String password;
	
	private List<Authority> authorities;
	private UserDetail userDetail;
	
    public String getName() {
        return userDetail.getName();
    }
	public PrincipalUser toPrincipal() {
		return PrincipalUser.builder()
				.userId(userId)
				.username(username)
				.password(password)
				.name(getName())
				.authorities(authorities)
				.build();
	}
	
}

