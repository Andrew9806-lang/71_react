
import Lesson02 from "./lessons/lesson_01/lesson_01";
// Импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";
function App() {
  return (
    <>
      {/* Вызываем компонент Button для того, чтобы он вернул 
      JSX и наша кнопка отобразилась на странице*/}
      {/* <div className="button-container">
        <Button />
      </div> */}
      <Lesson02 />
    </>
  );
}
export default App;