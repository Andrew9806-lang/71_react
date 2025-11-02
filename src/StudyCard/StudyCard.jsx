import Button from "../Button/Button";
import "./styles.css";
// imenovanniya import
// tutu mi dobavlyaem objekt kotoriy sozdali no on imenovanniy i export ego tozhe

import { lessonData } from "./data";

function StudyCard(props) {
  // funkciya vozvrashaet imya uchitelya i ego familiyu

  return (
    <div className="study-card-wraper">
      {/* tut mi dobavlyaem object sozdanniy v js  */}
      <h3>Lesson2 {props.lesson_number}</h3>
      <p>{props.topic}</p>
      {/* tut mi vizivaem funkciyu dlya dobavleniya */}
      <p>{props.name}</p>
      <img src={props.imgSrc} />
      <Button name="View" type="submit"/>
    </div>
  );
}
// eto export po umolchaniyu
// 1- ego mozhno sdelat tolko 1 raz tolko dlya odnoi funckcii i komponenta
// 2 - pri importe mi mozhem menyat nazvanie elementa kotoriy mi importiruem
export default StudyCard;
