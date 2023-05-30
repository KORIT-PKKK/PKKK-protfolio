import React from 'react';

const PostUpdateView = () => {
    return (
        <>
            <div>
                <div>
                    <LogoUI onClick={menuClickHandle} />
                </div>
                <div css={S.postContainer}>
                    <header>
                        <div css={S.post}>
                            <h1>게시글 작성</h1>
                        </div>
                        <div css={S.footer}>
                            <div css={S.place}>
                                <div css={S.placeDetail}>
                                    <div css={S.placeTitle}>{locDetail.locName}</div>
                                    <div css={S.placeTimeDate}>2023.5.16 (화)</div>
                                </div>
                                <div css={S.detailContainer}>
                                    <div css={S.detail}>{locDetail.category}</div>
                                    <div css={S.wordConnection}>·</div>
                                    <div css={S.detail}>{locDetail.address}</div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div css={S.mainContainer}>
                            <div css={S.mainStarCheck}>별점을 체크해주세요!</div>

                            <RatingUI onRatingChange={handleRatingChange} />

                            <div css={S.starScore}>
                            </div>
                            <div>
                                <input multiple={true} type="file" onChange={handleChange} accept="" />
                            </div>
                        </div>
                        <div>
                            <div css={S.mainTextInputContainer}>
                                <textarea css={S.mainTextInput} placeholder=' 리뷰글 작성하기
                                다른 사용자들이 상처받지 않도록 좋은 표현을 사용해주세요.
                                유용한 Tip도 남겨주세요!' onChange={contentChangeHandle} name='content' />
                            </div>
                        </div>
                        {errorMessage && <div css={S.error}>{errorMessage}</div>}
                        <div css={S.wordCountContainer}>
                            <div>PKKK플레이스</div>
                            <div>{contentCount}/200</div>
                        </div>
                    </main>
                    <footer>
                        <div css={S.mainTextContainer}>
                            <button css={S.mainTextButton} type="button" onClick={addPostSubmitHandle}><MdSaveAlt />등록하기</button>
                            {/* <button css={S.mainTextButton} type="button"><BsPencilSquare />수정</button> */}
                            {/* <button css={S.mainTextButton} type="button"><AiOutlineDelete />삭제</button> */}
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default PostUpdateView;