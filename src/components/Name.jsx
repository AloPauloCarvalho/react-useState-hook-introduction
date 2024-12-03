import React, {useState} from 'react'

export default function Name() {
  
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [job, setJob] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const updateName = () => {
    setName(inputValue);
    setInputValue("");
  }

  const clearName = () => {
    setName("");
    setInputValue("");
  }

  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Employed: {job ? "Yes":"No"}</h3>

        <div>
          <input
           value={inputValue}
           onChange={handleInputValue}
           placeholder='Digite o nome'/>
          <button onClick={updateName}>Set Name</button>
          <button onClick={clearName}>Clear</button>
        </div>

        <div>
          <button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
          <button onClick={() => setJob((job) => !job)}>Employed?</button>
        </div>
    </div>
  );
}
