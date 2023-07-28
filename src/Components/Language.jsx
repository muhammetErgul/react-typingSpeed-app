import { setLanguage, selectLang } from "../redux/typingSpeedSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Language() {
  const language = useSelector(selectLang);
  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <div>
      <select className="lang" value={language} onChange={hanldeChange}>
        <option value="turkish">Turkish</option>
        <option value="english">English</option>
      </select>
    </div>
  );
}
