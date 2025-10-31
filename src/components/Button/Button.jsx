import "./styles.css";

// sozdaetsya s pomoshyu slovo function 
// ! obyazatelno s pomoshyu bolshoi bukvi 
// komponent dolzhen obyazaterlno dolzhen vozvrashat jsx incache on prosto ne budet komponentom
function Button(){
    return <button className="button">Get</button>;
}
//export komponenta po umolchaniyu komponenta button s pomoshyu eksporta
// mi mozhem poluchat komponent v drugih komponentah i tam ego ispolzovat 
// inache komponent budet nedostupen v drugih failah projejta 

export default Button;