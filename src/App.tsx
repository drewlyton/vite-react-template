import "./App.css";
import { ObjectDisplay } from "./components/ObjectDisplay";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <ObjectDisplay
        json={{
          string: "bar",
          bool: true,
          number: 42,
          null: null,
          array: ["bar", true, 42, null],
          object: { nested: true },
        }}
      />
    </div>
  );
}

export default App;
