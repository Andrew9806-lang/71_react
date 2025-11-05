import{v4} from "uuid";

import "./styles.css";
import { animalsData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
function Lesson05() {
    // map vsegda dolzhen chto to vozvrashat to est noviy massiv na osnove dlya massiva
// kotorie mi vizivali metod , s takim kolichestvom elementov kak i v ishodnom massive
// !!!! - v callback aunkcii , kotoruyu mi peredaem v map dolzhen bit vozvrat
//v resultate v peremennoi animalCards budet hranitsya massiv elementov JSX (komponentov)
// item - hranit perviy element massiva i - index - array massiv
 const animalCards= animalsData.map((item,index,array)=>{
    return ( 
    <div className="card-wrapper" key={v4()}>

          <div>{index+1}</div>
        <AnimalCard 
    // key={v4()}
    // eto generaciya kluchei 
    animalName={item.name}
    animalSpecies={item.species}
    animalImg={item.image}
    />
    </div>
    )
 });

 
  return (<div className="lesson05-wrapper">
    {/* <AnimalCard 
    animalName={animalsData[0].name}
    animalSpecies={animalsData[0].species}t
    animalImg={animalsData[0].image}
    /> */}
    {animalCards}
  </div>
  );
  
}
export default Lesson05;