import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const validator = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <>
            <Header />
            <UserInput handleChange={handleChange} userInput={userInput} />
            {!validator && <p className="center">Duration must be at least 1 year</p>}
            {validator && <Results input={userInput} />}
        </>
    );
}

export default App;
