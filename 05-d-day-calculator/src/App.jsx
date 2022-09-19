import "./App.css";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";

const App = () => {
  return (
    <div>
      <Header />
      <DateInput />
      <Result />
      <Footer />
    </div>
  );
};

export default App;
