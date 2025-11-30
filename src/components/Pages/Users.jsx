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
          <>
            {allUsers.data.map((user) => (
              <div className="media" key={user.ID}>
                <img
                  src={user.Avatar}
                  className="mr-3 border p-1 rounded"
                  height={60}
                  alt={user.ID}
                />
                <div className="media-body">
                  <h5 className="mb-0 mt-1 display-4">{user.Name}</h5>
                  <p>{user.ID}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </ContainerRow>
  );
};

export default Users;
