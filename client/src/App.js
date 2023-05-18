import NavBar from "./components/NavBar/NavBar";
import {Landing, Home, Detail, Form } from "./views"
import { Route, Routes, useLocation } from "react-router-dom";



function App() {
  
  const location = useLocation().pathname;  
  
  return (
    <div className="App">

      {(location !== "/" && !location.includes("detail")) && <NavBar />}

      <Routes>
      <Route path="/" element={<Landing />} /> 
      <Route path="/home" element={<Home />} /> 
      <Route path="/detail/:id" element={<Detail />} /> 
      <Route path="/create" element={<Form />} /> 
      </Routes>

    </div>
  );
}

export default App;
