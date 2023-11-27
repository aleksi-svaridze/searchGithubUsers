import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

import { useState } from "react";


function App() {
  let [ isDark, setIsDark ] = useState(true);
  return (
    <div style={{backgroundColor: isDark ? '#F6F8FF': '#141D2F', height: '100vh'}}>
      <div className="container">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <SearchBar isDark={isDark} />
      <UserCard isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
