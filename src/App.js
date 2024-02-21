import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

import { useState} from "react";


function App() {
  let [ isDark, setIsDark ] = useState(true);
  let [userValue, setUserValue] = useState('');
  let [userData, setUserData] = useState([]);

  const handleUserData = async e => {
      e.preventDefault()

      const response = await fetch(`https://api.github.com/users/${userValue}`);
      const data = await response.json()

      setUserData(data);
  }

  return (
    <div style={{backgroundColor: isDark ? '#F6F8FF': '#141D2F'}}>
      <div className="container">
        <Header isDark={isDark} setIsDark={setIsDark} />

        <SearchBar 
          isDark={isDark} 
          setUserValue={setUserValue} 
          handleUserData={handleUserData} 
          userData={userData} />

        <UserCard isDark={isDark} userData={userData} />
      </div>
    </div>
  );
}

export default App;
