import "./styles.css";
import Input1 from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { InputInfo } from "./data";

function InputForm() {
  return (
    <div className="forms-container">
      <Input1 {...InputInfo} />
      <Button type="submit" name="get" />
    </div>
  );

// variant 2 
//   return (
//     <div className="forms-container">
//       <Input1
//         label={InputInfo.label}
//         name={InputInfo.name}
//         placeholder={InputInfo.placeholder}
//       />
//          <Button type="submit" name="get" />
//     </div>
//   );
};
export default InputForm;
