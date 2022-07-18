import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";

function App() {
  return (
    <Router className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/about" element={<AboutScreen/>}></Route>
        <Route path="/contattaci" element={<ContactScreen/>}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktailScreen/>}></Route>
        <Route path="*" element={<ErrorScreen/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
