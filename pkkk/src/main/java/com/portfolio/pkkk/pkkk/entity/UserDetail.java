package com.portfolio.pkkk.pkkk.entity;

import java.sql.Timestamp;

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
public class UserDetail {
	private int userDtlId;
	private int userId;
	private String name;
	private String introduce;
	private String imageUrl;
	private Timestamp joinDate;
}
