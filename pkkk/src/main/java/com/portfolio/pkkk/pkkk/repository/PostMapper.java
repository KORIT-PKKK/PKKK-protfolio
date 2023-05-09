package com.portfolio.pkkk.pkkk.repository;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.portfolio.pkkk.pkkk.dto.post.PostDetailReqDto;


@Mapper
public interface PostMapper {
	 @Select("CALL get_post_dtl(#{p_post_id})")
	 List<PostDetailReqDto> getPostDetail(int postId);
}
