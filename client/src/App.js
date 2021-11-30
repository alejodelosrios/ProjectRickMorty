import { results } from "./data/myDB";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Cards data={results} />} />
        <Route path="/names/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
}

export default App;
