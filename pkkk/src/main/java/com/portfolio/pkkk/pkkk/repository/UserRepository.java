package com.portfolio.pkkk.pkkk.repository;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.pkkk.pkkk.entity.User;

@Mapper
public interface UserRepository {

	public User findUserByUsername(String username);
	
}
