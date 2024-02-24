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

  const setDarkTheme = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark__theme')
}
const setLightTheme = () => {
    document.querySelector('body').setAttribute('data-theme', 'light__theme')
}

  const handleThemeChange = () => {
    setIsDark(!isDark)

    if(isDark) setDarkTheme()
    else setLightTheme()
  }

  return (
    <div className={`app`}>
      <div className="container">
        <Header isDark={isDark} handleThemeChange={handleThemeChange} />

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
