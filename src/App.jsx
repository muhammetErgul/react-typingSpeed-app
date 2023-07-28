import "./App.scss";
import Input from "./Components/Input";
import WordDisplay from "./Components/WordDisplay";
import { selectTimer } from "./redux/typingSpeedSlice";
import { useSelector } from "react-redux";
import Score from "./Components/Score";
function App() {
  const timer = useSelector(selectTimer);
  return (
    <>
      <main className="app">
        {timer === 0 ? "" : <WordDisplay />}
        <Input />
        {timer === 0 && <Score />}
      </main>
    </>
  );
}

export default App;
