import Search from "./components/Search";
import Title from "./components/Title";
import "./index.css"
import "./bg.png"
import ContextProvider from "./components/ContextProvider";
import Display from "./components/Display";

function App() {
  return (
    <ContextProvider>
      <div className="app">
        <Title/>
        <Search/>
        <Display/>
      </div>
    </ContextProvider>
  );
}

export default App;
