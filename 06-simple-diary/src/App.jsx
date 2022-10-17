import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { getAllDiaries } from "./libs/api";
import LifeCycle from "./LifeCycle";
import OptimizeTest from "./OptimizeTest";

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return action.diaries;
    case "create":
      return [action.newDiary, ...state];
    case "delete":
      return state.filter((item) => item.id !== action.targetId);
    case "update":
      return state.map((item) => (item.id === action.targetId ? { ...item, content: action.content } : item));
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [diaryData, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    getDiaryData();
  }, []);

  const getDiaryData = async () => {
    const diaries = await getAllDiaries();

    dispatch({ type: "init", diaries });
  };

  const onAdd = useCallback((newDiary) => {
    dispatch({ type: "create", newDiary });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "delete", targetId });
  }, []);

  const onEdit = useCallback((targetId, content) => {
    dispatch({ type: "update", targetId, content });
  }, []);

  const diaryAnalysis = useMemo(() => {
    const goodEmotionCount = diaryData.filter((diary) => diary.emotion >= 3).length;
    const badEmotionCount = diaryData.length - goodEmotionCount;
    const goodEmotionRatio = (goodEmotionCount / diaryData.length) * 100;

    return { goodEmotionCount, badEmotionCount, goodEmotionRatio };
  }, [diaryData.length]);

  const { goodEmotionCount, badEmotionCount, goodEmotionRatio } = diaryAnalysis;

  const memoizedDispatches = useMemo(() => {
    return { onAdd, onDelete, onEdit };
  }, []);

  return (
    <>
      <OptimizeTest />
      <LifeCycle />
      <DiaryStateContext.Provider value={diaryData}>
        <DiaryDispatchContext.Provider value={memoizedDispatches}>
          <DiaryEditor />
          <section>
            <div>전체 일기 개수 : {diaryData.length}</div>
            <div>기분 좋은 일기 개수 : {goodEmotionCount}</div>
            <div>기분 나쁜 일기 개수 : {badEmotionCount}</div>
            <div>기분 좋은 일기 비율 : {goodEmotionRatio}</div>
          </section>
          <DiaryList />
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
};

export default App;
