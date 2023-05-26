import ErrorNotFound from "./components/ErrorNotFound/ErrorNotFound";
import NavBar from "./components/NavBar/NavBar";
import { Landing, Home, Detail, Form } from "./views";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";

function App() {

  const location = useLocation().pathname;

  return (
    <div className="App">
      
      {(location !== "/" && location !== "errornf") && <NavBar />}
      {/* {((location !== "/" && location !== "errornf") && !location.includes("create")) && <NavBar />} */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
        <Route path="/*" element={<Navigate to= "/errornf" />} />
        <Route path="/errornf" element={<ErrorNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
