import { useState } from "react";
import Header from "./Bootstrap/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import FormGroup from "./Bootstrap/FormGroup";
import { GetGitHubUserInfo } from "../services/GitHub";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [ghID, setGhID] = useState("");
  const [response, setResponse] = useState(
    "Please enter a GitHub ID and press Fetch Details.",
  );
  const handleFetchDetails = (e) => {
    e.preventDefault();
    GetGitHubUserInfo(ghID).then((response) => setResponse(response));
  };
  return (
    <main>
      <Header dark={darkMode} className="justify-content-center">
        SIT Workshop <small>({import.meta.env.MODE})</small>
      </Header>
      <ContainerRow className="my-4 GitHubID">
        <div className="col-8">
          <h2 className="display-4">Enter your GitHub ID</h2>
          <form onSubmit={handleFetchDetails}>
            <FormGroup
              Label="GitHub ID"
              Id="GitHubID"
              Value={ghID}
              onChange={(e) => {
                setGhID(e.target.value);
              }}
            />
            <input
              type="submit"
              className="btn btn-primary btn-small"
              value="Fetch Details"
            />
          </form>
        </div>
        <div className="col-4">
          <h2 className="display-4">Preview</h2>
          <pre>{JSON.stringify({ response }, null, 2)}</pre>
        </div>
      </ContainerRow>
    </main>
  );
};

export default App;
