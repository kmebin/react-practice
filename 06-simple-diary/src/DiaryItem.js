import React from "react";
import styled from "styled-components";

const DiaryItem = ({ id, author, content, emotion, date, onDelete }) => {
  return (
    <StyledRoot>
      <DiaryInfo>
        <strong>
          작성자: {author} | 감정점수: {emotion}
        </strong>
        <span>{new Date(date).toLocaleString()}</span>
      </DiaryInfo>
      <DiaryContent>
        <strong>{content}</strong>
      </DiaryContent>
      <button
        type='button'
        onClick={() => {
          window.confirm(`${id}번 일기를 정말 삭제하시겠습니까?`) && onDelete(id);
        }}
      >
        삭제하기
      </button>
    </StyledRoot>
  );
};

const StyledRoot = styled.li`
  margin-bottom: 10px;
  padding: 20px;
  background-color: rgb(240, 240, 240);
`;

const DiaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;

  & strong {
    font-weight: 400;
  }

  & span {
    color: gray;
  }
`;

const DiaryContent = styled.div`
  height: 60px;
`;

export default DiaryItem;
