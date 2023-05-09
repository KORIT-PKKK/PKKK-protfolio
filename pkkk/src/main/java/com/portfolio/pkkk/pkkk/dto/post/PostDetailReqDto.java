package com.portfolio.pkkk.pkkk.dto.post;

import java.util.Date;

import lombok.Data;

@Data
public class PostDetailReqDto {
	private int postId;
	private int userId;
	private int storeId;
	private String name;
	private String imageUrl;
	private int postCount;
	private int picCount;
	private int flwCount;
	private String content;
	private int postViewCnt;
	private int evalId;
	private byte[] picData;
	private Date createAt;
	private Date updateAt;
}
