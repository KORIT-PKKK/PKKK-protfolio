package com.portfolio.pkkk.pkkk.controller.post;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.pkkk.pkkk.dto.post.PostDetailReqDto;
import com.portfolio.pkkk.pkkk.service.PostService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PostController {
	private final PostService postService;
	
//	@GetMapping("/get/user/overview")
//	public ResponseEntity<?> getUserOverview() {
//		
//	}
	
	@GetMapping("/get/post/dtl")
	public ResponseEntity<?> getPostDtl(int postId) {
		List<PostDetailReqDto> postDetails = postService.getPostDetail(postId);
		return ResponseEntity.ok().body(postDetails); 

	}
}
