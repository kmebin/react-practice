import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mount!");
  }, []);

  useEffect(() => {
    console.log("Update!");
  });

  useEffect(() => {
    console.log(`Count is update! : ${count}`);

    if (count > 5) {
      alert("count가 5를 넘었습니다. 1로 초기화 됩니다.");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`Text is update! : ${text}`);
  }, [text]);

  return (
    <StyledRoot>
      <div>
        <strong>{count}</strong>
        <button type='button' onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  padding: 20px;
`;

export default LifeCycle;
