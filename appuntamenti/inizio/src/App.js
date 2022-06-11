import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const reloadAllItems = () => {
    setPeople(data)
  };
  const removeItem = (id) => {
    setPeople(oldValue => {
      return oldValue.filter(value => value.id !== id);
    })
  };
  //console.log(people);
  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)"}}>Prossimi incontri</h2>
        <div className="people-list">
          <List data={people} removeItem={removeItem}/>
        </div>
        <div className="btn-group">
          <button className="btn btn-reload" onClick={reloadAllItems}>Reload</button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>Delete All</button>
        </div>
      </div>
    </section>
  );
}

export default App;
