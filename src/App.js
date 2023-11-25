import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";


function App() {
  return (
    <div className="container" style={{background: 'red'}}>
      <Header />
      <SearchBar />
      <UserCard />
    </div>
  );
}

export default App;
