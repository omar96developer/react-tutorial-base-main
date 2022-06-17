import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
const getFromLocalStorage = () => {
  if(localStorage.getItem('theme')){
    return localStorage.getItem('theme');
  } 
}
// returna il suo valore o di default return 'light-mode'

function App() {
  const [theme, setTheme] = useState(getFromLocalStorage() || 'light-mode');

  //function che cambia il tema a seconda del suo valore
  const cambiaTema = () => {

    if(theme === 'light-mode'){
      setTheme('dark-mode')
    }else{
      setTheme('light-mode')
    }
  }
  //AL MUTARE DEL THEME STATE,, ATTACCA UNA CLASSE AL NOSTO HTML TAG
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  },[theme])

  return (
    <section className="section-center">
      <div className="container">
        
        <button className="btn " onClick={cambiaTema}>Cambia</button>
        <section className="article-section">
          {
            data.map(el => <Articolo key={el.id} {...el}/>)
          }
        </section>
      </div>
    </section>
  );
}

export default App;
