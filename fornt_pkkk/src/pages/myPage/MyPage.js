/** @jsxImportSource @emotion/react */
import * as S from './style/MyPageStyle';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { FaRobot } from 'react-icons/fa';

const MyPage = () => {
    return (
        <div css={S.container}>
            <div css={S.userInfocontainer}>
                <div css={S.userInfoAndBackButton}>
                    <div css={S.userInfoBox}>
                        <div css={S.photoBox}></div>
                        <div css={S.userInfo}>
                            <div css={S.userName}>병수</div>
                            <div css={S.userFunctionBox}>
                                <div css={S.userFunction}>리뷰 0</div>
                                <div css={S.wordSeparation}>·</div>
                                <div css={S.userFunction}>팔로잉 0</div>
                                <div css={S.wordSeparation}>·</div>
                                <div css={S.userFunction}>팔로워 0</div>
                            </div>
                        </div>
                    </div>
                    <div css={S.backButton}>×</div>
                </div>
                <div css={S.profilemodifyButtonBox}>
                    <button css={S.profilemodifyButton}><FiUser css={S.profilemodifyButtonIcon}/>프로필 편집</button>
                </div>
            </div>
            <div css={S.followSettingContainer}>
                <div css={S.followSettingBox}>
                    <button css={S.followSettingButton}>
                        <div css={S.followSetting}><FiUsers css={S.followSettingIcon}/> 팔로우/차단 관리 <BsDot fill='red' css={S.stateChange}/> </div>
                        <div css={S.addFollowState}>팔로우 신청 1명</div>
                    </button>
                    <button css={S.followSettingButton}>
                        <div css={S.followSetting}><AiOutlineBell css={S.alarmSettingIcon}/>알림설정</div>
                    </button>
                </div>
            </div>
            <div css={S.settingContainer}>
                <div css={S.settingBox}>
                    <button css={S.noticeButton}>공지사항</button>
                    <button css={S.noticeButton}>PKKK플레이스 톡톡친구 맺기</button>
                    <button css={S.logoutButton}><div>로그아웃</div> <div css={S.logoutUsername}>username</div></button>
                </div>
            </div>
            <div css={S.smartBotContainer}>
                <div css={S.smartBotBox}>
                    <div css={S.smartBot}>플레이스 스마트봇<FaRobot fill='green' css={S.smartBotIcon}/></div>
                    <div css={S.smartBotMessage}>궁금한게 있을 땐 바로 물어보세요!</div>
                </div>
            </div>
            <footer css={S.footer}>
                <div css={S.centerBox}>
                    <div css={S.centerButton}>PKKK플레이스 고객센터</div>
                    <div css={S.separationBar}>|</div>
                    <div css={S.centerButton}>신고센터</div>
                </div>
                <div css={S.policyBox}>
                    <div css={S.policyButton}>이용정책</div>
                    <div css={S.separationBar}>|</div>
                    <div css={S.policyButton}>개인정보처리방침</div>
                </div>
                <div css={S.componyBox}>
                    <button css={S.componyButton}>©PKKK Corp.</button>
                </div>
            </footer>
        </div>
    );
};

export default MyPage;