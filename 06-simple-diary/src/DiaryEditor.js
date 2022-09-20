import React, { useState } from "react";
import styled from "styled-components";

const DiaryEditor = () => {
  const [input, setInput] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const inputChangeHandler = (e) => {
    setInput((preInput) => ({
      ...preInput,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = () => {
    console.log(input);
    alert("저장 성공!");
  };

  return (
    <StyledRoot>
      <h2>오늘의 일기</h2>
      <StyledForm>
        <input type='text' name='author' value={input.author} onChange={inputChangeHandler} />
        <textarea name='content' value={input.content} onChange={inputChangeHandler} />
        <EmotionFilter>
          <label htmlFor='emotion'>오늘의 감정점수 : </label>
          <select name='emotion' id='emotion' value={input.emotion} onChange={inputChangeHandler}>
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

const StyledRoot = styled.section`
  border: 1px solid gray;
  padding: 20px;
  text-align: center;
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
    cursor: pointer;
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

export default DiaryEditor;
