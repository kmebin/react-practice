import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { getAllDiaries } from "./libs/api";
import LifeCycle from "./LifeCycle";
import OptimizeTest from "./OptimizeTest";

const App = () => {
  const [diaryData, setDiaryData] = useState([]);

  useEffect(() => {
    getDiaryData();
  }, []);

  const getDiaryData = async () => {
    const diaries = await getAllDiaries();

    setDiaryData(diaries);
  };

  const addDiaryHandler = useCallback((newDiary) => {
    setDiaryData((prev) => [newDiary, ...prev]);
  }, []);

  const deleteDiaryHandler = (targetId) => {
    setDiaryData((prev) => prev.filter((diary) => diary.id !== targetId));
  };

  const editDiaryHandler = (targetId, content) => {
    setDiaryData((prev) => prev.map((diary) => (diary.id === targetId ? { ...diary, content } : diary)));
  };

  const diaryAnalysis = useMemo(() => {
    const goodEmotionCount = diaryData.filter((diary) => diary.emotion >= 3).length;
    const badEmotionCount = diaryData.length - goodEmotionCount;
    const goodEmotionRatio = (goodEmotionCount / diaryData.length) * 100;

    return { goodEmotionCount, badEmotionCount, goodEmotionRatio };
  }, [diaryData.length]);

  const { goodEmotionCount, badEmotionCount, goodEmotionRatio } = diaryAnalysis;

  return (
    <>
      <OptimizeTest />
      <LifeCycle />
      <DiaryEditor onAdd={addDiaryHandler} />
      <section>
        <div>전체 일기 개수 : {diaryData.length}</div>
        <div>기분 좋은 일기 개수 : {goodEmotionCount}</div>
        <div>기분 나쁜 일기 개수 : {badEmotionCount}</div>
        <div>기분 좋은 일기 비율 : {goodEmotionRatio}</div>
      </section>
      <DiaryList diaryList={diaryData} onDelete={deleteDiaryHandler} onEdit={editDiaryHandler} />
    </>
  );
};

export default App;
