import Header from "./Bootstrap/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
  return <main>
    <Header dark={darkMode} className="justify-content-center">SIT Workshop</Header>
    <ContainerRow>
      <div className="col-12 my-4">
        <button className="btn btn-primary" onClick={handleMode}>{darkMode ? 'Light' : 'Dark'} Mode</button>
      </div>
      <div className="col-12 my-4">
        <pre className="border rounded bg-light p-2">
          {JSON.stringify({ darkMode }, null, 2)}
        </pre>
      </div>
    </ContainerRow>
  </main>;
};

export default App;
