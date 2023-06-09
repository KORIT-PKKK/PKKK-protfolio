package com.portfolio.pkkk.pkkk;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.portfolio.pkkk.pkkk.entity.Authority;
import com.portfolio.pkkk.pkkk.entity.User;

import java.util.List;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PrincipalUser implements UserDetails {

	private int userId;
	private String password;
	private String username;
	private String name;
	private List<Authority> authorities;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		
		this.authorities.forEach(authority -> {
			authorities.add(new SimpleGrantedAuthority(authority.getRole().getRoleName()));
		});
		
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}

