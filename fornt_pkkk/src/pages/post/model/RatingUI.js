import React, { useEffect, useState } from 'react';
import * as S from './styles/RatingUIStyle';
import { FaStar } from 'react-icons/fa';

const ARRAY = [0, 1, 2, 3, 4];

const StarRating = () => {
    const [score, setScore] = useState([false, false, false, false, false]);

    const starScore = index => {
        let star = [...score];
        for (let i = 0; i < 5; i++) {
          star[i] = i <= index ? true : false;
        }
        setScore(star);
      };

  return (
    <>
        <div css={S.wrap}>
        <div css={S.ratingText}>평가하기</div>
        <div css={S.stars}>
            {ARRAY.map((el, index) => (
            <FaStar
            key={index}
            size="20"
            fill="Gray"
            />
        ))}
        </div>
        </div>
    </>
  );
};

export default StarRating;