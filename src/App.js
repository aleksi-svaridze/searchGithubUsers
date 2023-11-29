import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

import { useState , useEffect} from "react";


function App() {
  let [ isDark, setIsDark ] = useState(true);
  let [user, setUser] = useState([]);



  useEffect(() => {
    fetch('https://api.github.com/users/1')
      .then(res =>  res.json())
      .then(fetchedUser => {
      console.log(fetchedUser)
          setUser(fetchedUser)
      })
  }, [])

  return (
    <div style={{backgroundColor: isDark ? '#F6F8FF': '#141D2F'}}>
      <div className="container">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <SearchBar isDark={isDark} />
        <UserCard isDark={isDark} user={user} />
      </div>
    </div>
  );
}

export default App;
