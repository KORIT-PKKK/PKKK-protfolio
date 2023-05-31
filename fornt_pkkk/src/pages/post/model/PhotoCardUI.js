import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './styles/PhotoCardUIStyle';
import { GiCancel } from 'react-icons/gi';

const PhotoCardUI = ({ url, onDeleteURL }) => {

  const handleDelete = () => {
    onDeleteURL(url);
  };

  return (
    <>
      <div css={S.photoCardContainer}>
        <>
          <div css={S.cancelButton} onClick={handleDelete}>
            <GiCancel css={S.cancelIcon} />
          </div>
          <div css={S.photoBox}>
            <img src={url} alt="" css={S.photo} />
          </div>
        </>
      </div>
    </>
  );
};

export default PhotoCardUI;