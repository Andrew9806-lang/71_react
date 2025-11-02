
import Lesson03 from "./Lesson_03/Lesson_03";
// Импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";


//importi lekcii
// import Lesson02 from "./lessons/lesson_01/lesson_01";

//importi domashnih rabot
 // import Homework_02 from "./homeworks/homework_02/homework_02";


function App() {
  return (
    <>
      {/* Вызываем компонент Button для того, чтобы он вернул 
      JSX и наша кнопка отобразилась на странице*/}
      {/* <div className="button-container">
        <Button />
      </div> */}

      {/* lekciya 2 */}
      {/* <Lesson02 /> */}
      {/* tut nado dobavit domashku git push -u original imya  */}
      {/* <Homework_02 /> */}
      {/* lekciya 3 */}
      
      <Lesson03 />
    </>
  );
}
export default App;