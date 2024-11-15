import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";


const INITIAL_OBJECT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_OBJECT);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration > 0;


  return (
    <>
      <Header />
      <main>
        <UserInput onChange={handleChange} userInput={userInput} />
        {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
        {inputIsValid && <ResultsTable input={userInput}/>}
      </main>
    </>
  );
}

export default App;
