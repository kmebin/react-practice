import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ id, author, content, emotion, date }) => {
  const { onDelete, onEdit } = useContext(DiaryDispatchContext);

  const editedContentInput = useRef();

  const [isEdit, setIsEdit] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const deleteHandler = () => {
    window.confirm(`${id}번 일기를 정말 삭제하시겠습니까?`) && onDelete(id);
  };

  const cancelEditHandler = () => {
    setIsEdit(false);
    setEditedContent(content);
  };

  const editHandler = () => {
    if (editedContent.length < 5) {
      editedContentInput.current.focus();
      return;
    }

    onEdit(id, editedContent);
    setIsEdit(false);
  };

  return (
    <StyledRoot>
      <DiaryInfo>
        <strong>
          작성자: {author} | 감정점수: {emotion}
        </strong>
        <span>{new Date(date).toLocaleString()}</span>
      </DiaryInfo>

      {!isEdit ? (
        <DiaryCommonMode>
          <strong>{content}</strong>
          <button type='button' onClick={deleteHandler}>
            삭제하기
          </button>
          <button type='button' onClick={() => setIsEdit(true)}>
            수정하기
          </button>
        </DiaryCommonMode>
      ) : (
        <DiaryEditMode>
          <textarea ref={editedContentInput} value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
          <button type='button' onClick={cancelEditHandler}>
            수정 취소하기
          </button>
          <button type='button' onClick={editHandler}>
            저장하기
          </button>
        </DiaryEditMode>
      )}
    </StyledRoot>
  );
};

export default React.memo(DiaryItem);

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

const DiaryCommonMode = styled.div`
  & strong {
    display: block;
    height: 60px;
  }
`;

const DiaryEditMode = styled.div`
  textarea {
    display: block;
    width: 500px;
    margin-bottom: 20px;
    padding: 10px;
  }

  & textarea {
    height: 150px;
  }
`;
