import React from "react";
import Text1 from "./Text1";
import Text2 from "./Text2";

const Result = () => {
  return (
    <main>
      <header>
        <h1>D-day 계산기</h1>
      </header>

      <section>
        <dl>
          <Text1 />
          <Text2 />
        </dl>
      </section>
    </main>
  );
};

export default Result;
