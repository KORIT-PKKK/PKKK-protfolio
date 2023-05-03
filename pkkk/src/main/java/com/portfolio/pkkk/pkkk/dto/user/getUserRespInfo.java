package com.portfolio.pkkk.pkkk.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class getUserRespInfo {
	private int userId;
	private String name;
	private String introduce;
	private String imgeUrl;
	private int postCount;
	private int picCount;
	private int followeeCount;
	private int followerCount;
}
