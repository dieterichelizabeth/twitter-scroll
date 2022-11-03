import "./App.css";
import Navbar from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="grid grid--1x3">
      <header className="App-header">
        <Navbar />
      </header>
      <Main />
      <Aside />
    </div>
  );
}

export default App;
