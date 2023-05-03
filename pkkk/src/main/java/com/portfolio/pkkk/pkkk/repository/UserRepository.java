package com.portfolio.pkkk.pkkk.repository;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {

	public void findUserByUsername(String username);
	
}
