import { useState } from "react";
import Header from "./Bootstrap/Header";
import HeaderLinks from "./HeaderLinks";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import GitHubUsers from "./Pages/GitHubUsers";
import Users from "./Pages/Users";
import E404 from "./Pages/404";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main>
      <Header dark={darkMode} items={HeaderLinks}>
        SIT Workshop <small>({import.meta.env.MODE})</small>
      </Header>
      <Routes>
        <Route path="/GitHubUsers" element={<GitHubUsers />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </main>
  );
};

export default App;
