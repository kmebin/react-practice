import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const mockData = [
  {
    id: 1,
    author: "김희빈",
    content: "하이와이요",
    emotion: 3,
    createdAt: new Date(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이와이요",
    emotion: 4,
    createdAt: new Date(),
  },
  {
    id: 3,
    author: "김희빈",
    content: "와이하이요",
    emotion: 2,
    createdAt: new Date(),
  },
  {
    id: 4,
    author: "홍길동",
    content: "아에이오우",
    emotion: 5,
    createdAt: new Date(),
  },
];

const App = () => {
  return (
    <>
      <DiaryEditor />
      <DiaryList diaryList={mockData} />
    </>
  );
};

export default App;
