import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

import { useState } from "react";


function App() {
  const [isLight] = useState(true);
  return (
    <div className="container" style={isLight ? {background: 'red'} : {background: 'black'}}>
      <Header />
      <SearchBar />
      <UserCard />
    </div>
  );
}

export default App;
