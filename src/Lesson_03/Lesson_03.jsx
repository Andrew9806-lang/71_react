import "./style.css";
import Button from "../components/Button/Button";
import AnimalCard from "../components/AnimalCard/AnimalCard";
import { lionData, zebraData, hippoData, lessonData } from "./data";
import StudyCard from "../StudyCard/StudyCard";

function Lesson03() {
  return (
    <div className="lesson03-wrapper">
           <StudyCard lessonData={lessonData[0]} />
      <StudyCard lessonData={lessonData[1]} />
      <Button name="Send" type="submit" />
      <Button name="get" type="submit" />
      <AnimalCard
        animalName={lionData.name}
        animalSpecies={lionData.species}
        animalImg={lionData.image}
      >
        {/* znachenie propsa children ,tak pishetsya esli dobavlyaem children */}
        <p>Main Character</p>
        </AnimalCard>

      <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData.species}
        animalImg={zebraData.image}
      >
        <p>Best friend</p>
        </AnimalCard>

      <AnimalCard
        animalName={hippoData.name}
        animalSpecies={hippoData.species}
        animalImg={hippoData.image}
      />
    </div>
  );
}
export default Lesson03;
