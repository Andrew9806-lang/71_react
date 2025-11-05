import "./styles.css";

// Компонент создаётся с помощью слова function и обязательно!
// с большой буквы. Компонент обязательно должен возвращать JSX
// иначе он просто не будет компонентом
//u funkcionalnih komponentov est parametr nazivaestya props
// etot parametr pozvolyaet v moment vizova peredat v komponent znacheniya 
// to est mi zadaem object i pishem tuda znachenie kotorie hotim 
function Button({type = "button",onClick,name}){
    return <button className="button" type={type} onClick={onClick}>{name}</button>;

// Экспорт по умолчанию компонента Button. С помощью экспорта
// мы можем получать компонент в других компонентах и там его
// использовать, то есть вызывать. Иначе компонент будет недоступен
// в других файлах проекта
export default Button;

// const props = {
//  name:
//  type:
// }