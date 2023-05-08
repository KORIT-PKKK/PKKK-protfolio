package com.portfolio.pkkk.pkkk.repository;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.pkkk.pkkk.entity.Authority;
import com.portfolio.pkkk.pkkk.entity.User;
import com.portfolio.pkkk.pkkk.entity.UserDetail;

@Mapper
public interface UserRepository {
	
	public User findUserByUsername(String username);
	public int saveUser(User user);
	public int saveUserDetail(UserDetail userDetail);
	public int saveAuthority(Authority authority);
	
	
//	@Procedure(value="sign_up")
//	public String getUserSignUp();
}
