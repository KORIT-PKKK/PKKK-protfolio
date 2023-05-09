package com.projectapp.pkkkplaces.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PostDetail {
    private int postId;
    private int userId;
    private int locId;
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
