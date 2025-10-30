import Button from "../../components/Button/Button";
import "./styles.css"
// tut mi mozhem pereimenovat potomuchto on neimeovanniy 
import LessonCard from "../../components/lessonCard/LessonCard";

function Lesson02() {
  return (
    <div className="lesson02-wrapper">
      <div className="button-container">
        <Button />
        <Button />
      </div>
      {/* esli menyaem nazvaniya to tut tozhe nado pomenyat  */}
      <LessonCard/>
    </div>
  );
}

export default Lesson02;