import React, { useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App = () => {
  const [diaryData, setDiaryData] = useState([]);

  const addDiaryHandler = (newDiary) => {
    setDiaryData([newDiary, ...diaryData]);
  };

  return (
    <>
      <DiaryEditor onAddDiary={addDiaryHandler} />
      <DiaryList diaryList={diaryData} />
    </>
  );
};

export default App;
