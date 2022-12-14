import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onAdd } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();
  const diaryId = useRef(21);

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const inputChangeHandler = (e) => {
    setState((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onAdd({ id: diaryId.current, ...state, date: new Date() });
    alert("저장 성공");

    setState({
      author: "",
      content: "",
      emotion: 1,
    });
    diaryId.current += 1;
  };

  return (
    <StyledRoot>
      <h2>오늘의 일기</h2>
      <StyledForm>
        <input ref={authorInput} type='text' name='author' value={state.author} onChange={inputChangeHandler} />
        <textarea ref={contentInput} name='content' value={state.content} onChange={inputChangeHandler} />
        <EmotionFilter>
          <label htmlFor='emotion'>오늘의 감정점수 : </label>
          <select name='emotion' id='emotion' value={state.emotion} onChange={inputChangeHandler}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </EmotionFilter>
        <button type='submit' onClick={submitHandler}>
          일기 저장하기
        </button>
      </StyledForm>
    </StyledRoot>
  );
};

export default React.memo(DiaryEditor);

const StyledRoot = styled.section`
  border: 1px solid gray;
  padding: 20px;
  text-align: center;

  & h2 {
    margin-bottom: 20px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input,
  textarea {
    width: 500px;
    margin-bottom: 20px;
    padding: 10px;
  }

  & textarea {
    height: 150px;
  }

  & button {
    width: 500px;
    padding: 10px;
  }
`;

const EmotionFilter = styled.div`
  width: fit-content;
  margin-bottom: 20px;

  & select {
    width: 300px;
    padding: 10px;
  }
`;
