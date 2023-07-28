import RestartBtn from "./RestartBtn";
import Timer from "./Timer";
import { useState } from "react";
import {
  checkWord,
  updateWord,
  resetGame,
  selectTimer,
} from "../redux/typingSpeedSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Input() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const timer = useSelector(selectTimer);

  const handleChange = (e) => {
    if (e.target.value.endsWith(" ")) {
      dispatch(updateWord(e.target.value.slice(0, -1)));
      setText("");
    } else {
      dispatch(checkWord(e.target.value));
      setText(e.target.value);
    }
  };
  //console.log(timer);
  const handleRestartClick = () => {
    setText("");
    dispatch(resetGame());
  };
  return (
    <section className="form">
      <div className="input">
        <input
          type="text"
          value={timer === 0 ? "" : text}
          onChange={handleChange}
          disabled={timer === 0}
        />
        <Timer />
        <RestartBtn handleRestartClick={handleRestartClick} />
      </div>
    </section>
  );
}
