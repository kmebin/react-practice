import React, { useState } from "react";

const CountView = React.memo(({ count }) => {
  return <div>{count}</div>;
});

const TextView = React.memo(({ text }) => {
  return <div>{text}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <section style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button type='button' onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </section>
  );
};

export default OptimizeTest;
