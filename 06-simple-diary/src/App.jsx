import React, { useEffect, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { getAllDiaries } from "./libs/api";
import LifeCycle from "./LifeCycle";

const App = () => {
  const [diaryData, setDiaryData] = useState([]);

  useEffect(() => {
    getDiaryData();
  }, []);

  const getDiaryData = async () => {
    const diaries = await getAllDiaries();

    setDiaryData(diaries);
  };

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
      <LifeCycle />
      <DiaryEditor onAdd={addDiaryHandler} />
      <DiaryList diaryList={diaryData} onDelete={deleteDiaryHandler} onEdit={editDiaryHandler} />
    </>
  );
};

export default App;
