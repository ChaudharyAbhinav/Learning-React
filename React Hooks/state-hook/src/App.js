import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <ClassCounterTwo />
    </div>
  );
}

export default App;
