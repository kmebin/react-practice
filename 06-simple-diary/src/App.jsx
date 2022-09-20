import React, { useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App = () => {
  const [diaryData, setDiaryData] = useState([]);

  const addDiaryHandler = (newDiary) => {
    setDiaryData([newDiary, ...diaryData]);
  };

  const deleteDiaryHandler = (targetId) => {
    setDiaryData((preDiary) => {
      return preDiary.filter((diary) => diary.id !== targetId);
    });
  };

  const editDiaryHandler = (targetId, content) => {
    setDiaryData((preDiary) => {
      return preDiary.map((diary) => (diary.id === targetId ? { ...diary, content } : diary));
    });
  };

  return (
    <>
      <DiaryEditor onAdd={addDiaryHandler} />
      <DiaryList diaryList={diaryData} onDelete={deleteDiaryHandler} onEdit={editDiaryHandler} />
    </>
  );
};

export default App;
