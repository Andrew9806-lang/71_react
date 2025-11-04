import "./styles.css";
import Button from "../../components/Button/Button"
import Counter from "../../components/Counter/Counter";
function Lesson04() {
    const showMessage = ()=>{
        alert("Outer function")
    };

    const showMessagewithName = (name)=>{
        alert(`outer function with param ${name}`)
    }
  return (
    <div className="lesson04-wrapper">
        <Counter />
      <div className="button-container">
        {/* primer 1 - sozdanie funkcii vnutri onClick */}
        <Button name ="Inner func" onClick={()=>{
            alert ("Srabotala funkciya")
        }} />
        {/* primer nomer 2 sozdanie funkcii vne knopki i peredacha peremennoi v prop */}
        <Button name="Outer Func" onClick={showMessage} />
        {/* primer 3 sozdanie funkcii knopki s parametrami, mi dolzhni sozdat obertku 
        chtob ona zhdala poka mi nazhmem eto nuzhno kogad est parametri*/}
        <Button name="func with param" onClick={()=>{showMessagewithName("Bob")}} />
      </div>
    </div>
  );
}
export default Lesson04;