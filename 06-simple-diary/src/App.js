import React, { useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App = () => {
  const [diaryData, setDiaryData] = useState([]);

  const addDiaryHandler = (newDiary) => {
    setDiaryData([newDiary, ...diaryData]);
  };

  const deleteDiaryHandler = (diaryId) => {
    setDiaryData((preDiary) => {
      return preDiary.filter((diary) => diary.id !== diaryId);
    });
  };

  return (
    <>
      <DiaryEditor onAdd={addDiaryHandler} />
      <DiaryList diaryList={diaryData} onDelete={deleteDiaryHandler} />
    </>
  );
};

export default App;
