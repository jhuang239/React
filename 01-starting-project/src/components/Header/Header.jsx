import reactImg from "../../assets/react-core-concepts.png";
import "./header.css";
const reactDescription = ["Fundamental", "Crucial", "Essential", "Key"];
function genRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const Header = () => {
    const description = reactDescription[genRandomInt(3)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
};

export default Header;
