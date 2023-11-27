import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

// import { useState } from "react";


function App() {
  // const [isLight] = useState(true);
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <UserCard />
    </div>
  );
}

export default App;
