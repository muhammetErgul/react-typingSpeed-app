import { useSelector } from "react-redux";

export default function Score() {
  const {
    correctWordCount,
    incorrectWordCount,
    totalKeyPress,
    correctKeyPress,
  } = useSelector((state) => state.typingSpeed);

  return (
    <div className="score">
      <div className="header">
        <h3>Sonuç</h3>
        <h4>Ekran Görüntüsü</h4>
      </div>
      <div className="wordCount">
        <div className="count">{(correctKeyPress / 5).toFixed(0)} DKS</div>
        <div className="bottom">(kelime yazabiliyorum)</div>
      </div>

      <div className="info">
        <div className="item">
          <span>Tuş Vuruşu</span>
          <span>{totalKeyPress}</span>
        </div>
        <div className="item">
          <span>Doğruluk</span>
          <span>{((correctKeyPress / totalKeyPress) * 100).toFixed(2)}%</span>
        </div>
        <div className="item">
          <span>Doğru Kelime</span>
          <span>{correctWordCount}</span>
        </div>
        <div className="item">
          <span>Yanliş Kelime</span>
          <span className="wrong" style={{ backgroundColor: "red" }}>
            {incorrectWordCount}
          </span>
        </div>
      </div>
    </div>
  );
}
