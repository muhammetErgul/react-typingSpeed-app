import Language from "./Language";
import { useSelector } from "react-redux";
import { selectItems, selectCurrentText } from "../redux/typingSpeedSlice";

export default function WordDisplay() {
  const words = useSelector(selectItems);
  const current = useSelector(selectCurrentText);

  return (
    <section className="wordDispay">
      <Language />
      <div className="words">
        <div className="body">
          {words.map((item, ind) => (
            <span
              key={item.id}
              className="word"
              style={{
                backgroundColor:
                  ind === current.index ? current.backgroundColor : "",
                color: item.color,
              }}
            >
              {item.word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
