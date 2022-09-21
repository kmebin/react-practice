import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      // 리턴되는 콜백함수는 언마운트 시점에 실행되게 됨
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHandler = () => setIsVisible(!isVisible);

  return (
    <StyledRoot>
      <button type='button' onClick={toggleHandler}>
        ON / OFF
      </button>
      {isVisible && <UnmountTest />}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  padding: 20px;
`;

export default LifeCycle;
