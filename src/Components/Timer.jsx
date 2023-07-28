import { useSelector, useDispatch } from "react-redux";
import {
  setTimer,
  selectIsFinished,
  selectTimer,
} from "../redux/typingSpeedSlice";
import { useEffect } from "react";
import { formatTime } from "../helpers/formatTime";
export default function Timer() {
  const isFinished = useSelector(selectIsFinished);
  const timer = useSelector(selectTimer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFinished) {
      const interval = window.setInterval(() => {
        dispatch(setTimer());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isFinished, dispatch]);
  return (
    <div className="timerContainer">
      <div className="timer">
        <span>{formatTime(timer)}</span>
      </div>
    </div>
  );
}
