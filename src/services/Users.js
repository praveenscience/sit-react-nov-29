import Axios from "axios";

export const GetAllUsers = () => Axios.get("/api/users");
