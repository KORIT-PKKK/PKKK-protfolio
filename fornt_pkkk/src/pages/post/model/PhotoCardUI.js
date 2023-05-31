import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './styles/PhotoCardUIStyle';
import { GiCancel } from 'react-icons/gi';

const PhotoCardUI = ({ url, handleDelete }) => {


  const handleDeleteClick = () => {
    handleDelete(url);
  };

  return (
    <>
      <div css={S.photoCardContainer}>
        <>
          <div css={S.cancelButton} onClick={handleDeleteClick}>
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