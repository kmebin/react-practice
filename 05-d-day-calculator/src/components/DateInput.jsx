import React from "react";

const DateInput = () => {
  return (
    <section>
      <h2 className='sr-only'>Date Input</h2>

      <div>
        <input type='text' id='input-year' value={"2022"} />
        <label htmlFor='input-year'>년</label>
        <input type='text' id='input-month' value={"9"} />
        <label htmlFor='input-month'>월</label>
        <input type='text' id='input-day' value={"19"} />
        <label htmlFor='input-day'>일</label>
        <span>을 기준으로</span>
      </div>

      <button type='button'>오늘</button>
    </section>
  );
};

export default DateInput;
