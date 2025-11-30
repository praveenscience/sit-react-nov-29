import { useState } from "react";
import { GetGitHubUserInfo } from "../../services/GitHub";
import ContainerRow from "../Bootstrap/ContainerRow";
import FormGroup from "../Bootstrap/FormGroup";
import GitHubUserInfo from "./GitHubUserInfo";

const GitHubUsers = () => {
  const [ghID, setGhID] = useState("");
  const [response, setResponse] = useState(
    "Please enter a GitHub ID and press Fetch Details."
  );
  const handleFetchDetails = (e) => {
    e.preventDefault();
    GetGitHubUserInfo(ghID)
      .then((response) => setResponse(response))
      .catch(() => {
        setResponse(
          <>
            The given GitHub UserID{" "}
            <code className="bg-light border rounded p-1">{ghID}</code> is
            invalid.
          </>
        );
      });
  };
  return (
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
            disabled={ghID.trim().length === 0}
            value="Fetch Details"
          />
        </form>
      </div>
      <div className="col-4">
        <h2 className="display-4">Preview</h2>
        {typeof response.data !== "object" ? (
          <>{response}</>
        ) : (
          <GitHubUserInfo {...response.data} />
        )}
      </div>
    </ContainerRow>
  );
};

export default GitHubUsers;
