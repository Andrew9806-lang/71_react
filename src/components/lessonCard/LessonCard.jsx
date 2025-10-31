import Button from "../Button/Button";
import "./styles.css";
// imenovanniya import
// tutu mi dobavlyaem objekt kotoriy sozdali no on imenovanniy i export ego tozhe

import { lessonData } from "./data";

function LessonCard() {
  // funkciya vozvrashaet imya uchitelya i ego familiyu
  const getFullName = () => {
    return `${lessonData.nameTacher} ${lesonData.surname}`;
  };

  return (
    <div className="lessonCard-wraper">
      {/* tut mi dobavlyaem object sozdanniy v js  */}
      <h3>Lesson2 {lessonData.lesson_number}</h3>
      <p>{lessonData.topic}</p>
      {/* tut mi vizivaem funkciyu dlya dobavleniya */}
      <p>{getFullName()}</p>
      <img src={lessonData.imgSrc} />
      <Button />
    </div>
  );
}
// eto export po umolchaniyu
// 1- ego mozhno sdelat tolko 1 raz tolko dlya odnoi funckcii i komponenta
// 2 - pri importe mi mozhem menyat nazvanie elementa kotoriy mi importiruem
export default LessonCard;
