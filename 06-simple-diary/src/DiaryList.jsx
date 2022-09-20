import React from "react";
import styled from "styled-components";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, onEdit, diaryList }) => {
  return (
    <StyledRoot>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <ul>
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} {...diary} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </ul>
    </StyledRoot>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

const StyledRoot = styled.section`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid gray;

  & h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  & h4 {
    margin-bottom: 20px;
  }
`;

export default DiaryList;
