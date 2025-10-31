import "./styles.css";
import { info } from "./data";
import Button from "../Button/Button";

function ProfileCard() {
    const  {imagsrc,name,surname,proffession,hobby}=info;
    // distuktizaciya objekta dlya udobstva 
  const getInfo = () => {
    return `${info.name} ${info.surname}`;
  };

  return (
    <div className="profileCard-wrapper">
      <img src={info.imgSrc} />
      <h3>{getInfo()}</h3>
      <p>Professional:{info.proffession}</p>
      <p className="hobby">hobby:{info.hobby}</p>
    </div>
  );
}

export default ProfileCard;
