package com.portfolio.pkkk.pkkk.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserFavorite {
	private int userFavId;
	private int userId;
	private int postId;
}
