/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/PlaceUIStyle';
import { AiOutlineStar } from 'react-icons/ai';

const PlaceUI = ({ locationInfo }) => {

    return (
        <>
            <div css={S.container}>
                <div css={S.buttonBox}>
                    <button css={S.placeButtonBox}>
                        <div css={S.placeName}>{locationInfo.locName}</div>
                        <div css={S.address}>
                            <div>{locationInfo.category}</div>
                            <div>·</div>
                            <div>{locationInfo.address}</div>
                        </div>
                    </button>
                    <button css={S.saveButtonBox}>
                        <AiOutlineStar css={S.saveIcon} />
                        <div>저장</div>
                    </button>
                </div>

            </div>
        </>
    );
};

export default PlaceUI;