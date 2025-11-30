import { useEffect, useState } from "react";
import ContainerRow from "../Bootstrap/ContainerRow";
import { GetAllUsers } from "../../services/Users";

const Users = () => {
  const [allUsers, setAllUsers] = useState(null);
  useEffect(() => {
    GetAllUsers().then((users) => setAllUsers(users));
  }, []);

  return (
    <ContainerRow className="my-4 GitHubID">
      <div className="col">
        <h2 className="display-4">Local BackEnd Users!</h2>
        {typeof allUsers?.data === "undefined" ? (
          <>
            <div className="alert alert-info text-center">Users Loading...</div>
          </>
        ) : (
          <pre className="bg-light p-1 border rounded">
            {JSON.stringify({ allUsers }, null, 2)}
          </pre>
        )}
      </div>
    </ContainerRow>
  );
};

export default Users;
