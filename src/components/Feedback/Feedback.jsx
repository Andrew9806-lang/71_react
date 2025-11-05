import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [counterLike, setCounterLike] = useState(0);
  console.log(counterLike);

  const [counterDislike,setCounterDislike] = useState(0)
  console.log(counterDislike);
  

  const onPlusLike = () => {
    setCounterLike((like) => like + 1);
  };

  const onPlusDislike = () => {
    setCounterDislike((dislike) => dislike + 1);
  };

  const resetLike=()=>{
    setCounterLike(0)
    setCounterDislike(0)
  }
  return (
    <div className="feedback-container">
       <div className="feedback-results-container">
      <div className="like-dislike-container">
          <div className="result-container">{counterLike}</div>
        <Button name="Like" onClick={onPlusLike} />
      </div>
      <div className="like-dislike-container">
          <div className="result-container">{counterDislike}</div>
        <Button name="disLike" onClick={onPlusDislike} />
      </div>
        <Button name="Reset" onClick={resetLike} />
        </div>
    </div>
  );
}
export default Feedback;