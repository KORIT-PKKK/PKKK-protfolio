package com.projectapp.pkkkplaces.repository;

import com.projectapp.pkkkplaces.entity.PostDetail;
import com.projectapp.pkkkplaces.entity.PostOutline;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.mapping.StatementType;

import java.util.List;

@Mapper
public interface PostRepo {
    @Select("CALL get_post_dtl(#{postId})")
    @Options(statementType = StatementType.CALLABLE)
    List<PostDetail> getPostDetail(Integer postId);

    @Select("CALL get_post_overview")
    @Options(statementType = StatementType.CALLABLE)
    List<PostOutline> getPosts();
}
