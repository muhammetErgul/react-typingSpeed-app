import { FaArrowsRotate } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function RestartBtn({ handleRestartClick }) {
  return (
    <div className="restarBtn">
      <button onClick={handleRestartClick}>
        {" "}
        <FaArrowsRotate />{" "}
      </button>
    </div>
  );
}
