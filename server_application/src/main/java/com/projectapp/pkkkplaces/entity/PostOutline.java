package com.projectapp.pkkkplaces.entity;

import lombok.Data;

import java.util.Date;

@Data
public class PostOutline {
    private int postId;
    private int userId;
    private int locId;
    private String name;
    private String imageUrl;
    private String locName;
    private String address;
    private int category;
    private int picPostCount;
    private String content;
    private int evalId;
    private byte[] picData;
    private Date createAt;
    private Date updateAt;
}
