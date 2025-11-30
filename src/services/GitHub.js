import Axios from "axios";

export const GetGitHubUserInfo = (username) =>
  Axios.get(`https://api.github.com/users/${username}`);
