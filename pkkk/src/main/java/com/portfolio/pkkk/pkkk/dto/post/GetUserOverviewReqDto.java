package com.portfolio.pkkk.pkkk.dto.post;

import lombok.Data;

@Data
public class GetUserOverviewReqDto {
	private int postId;
	private int userId;
	private int locId;
	private String name;
	private String imageUrl;
	private String locName;
	private String address;
	private int category;
	private int picPostCount;
	
}
