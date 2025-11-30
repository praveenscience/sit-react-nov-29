import Header from "./Bootstrap/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [myName, setMyName] = useState("");

  const handleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  const handleChangeName = e => {
    setMyName(e.target.value);
  }

  return (
    <main>
      <Header dark={darkMode} className="justify-content-center">SIT Workshop <small>({import.meta.env.MODE})</small></Header>
      <ContainerRow>
        <div className="col-12 my-4">
          <button className="btn btn-primary" onClick={handleMode}>{darkMode ? 'Light' : 'Dark'} Mode</button>
        </div>
        <div className="col-12 mt-4 mb-2">
          <p>Controlled Components</p>
          <input type="text" value={myName} name="text-1" onChange={handleChangeName} />
        </div>
        <div className="col-12">
          <input type="text" value={myName} name="text-2" onChange={handleChangeName} />
        </div>
        <div className="col-12 my-4">
          <pre className="border rounded bg-light p-2">
            {JSON.stringify({ darkMode, myName }, null, 2)}
          </pre>
        </div>
      </ContainerRow>
    </main>
  );
};

export default App;
