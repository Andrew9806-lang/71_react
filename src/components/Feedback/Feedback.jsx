import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [counterLike, setCounterLike] = useState(0);
  console.log(counterLike);

  const onPlusLike = () => {
    setCounterLike((like) => like + 1);
  };

  const onMinusLike = () => {
    setCounterLike((like) => like - 1);
  };

  const resetLike=()=>{
    setCounterLike((like) => like=0)
  }
  return (
    <div className="feedback-container">
      <div className="button-feedback">
        <Button name="Like" onClick={onPlusLike} />
      </div>
      <div className="result-container">{counterLike}</div>
      <div className="button-feedback">
        <Button name="disLike" onClick={onMinusLike} />
      </div>
        <Button name="Reset" onClick={resetLike} />
    </div>
  );
}
export default Feedback;