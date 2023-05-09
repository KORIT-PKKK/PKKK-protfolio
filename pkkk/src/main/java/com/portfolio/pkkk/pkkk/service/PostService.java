package com.portfolio.pkkk.pkkk.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portfolio.pkkk.pkkk.repository.PostMapper;

import lombok.RequiredArgsConstructor;

import com.portfolio.pkkk.pkkk.dto.post.PostDetailReqDto;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostMapper postMapper;
    
    public List<PostDetailReqDto> getPostDetail(int postId) {
        return postMapper.getPostDetail(postId);
    }
}
