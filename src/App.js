import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import SearchBar from "./Pages/Home/SearchBar/SearchBar";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add-billing" element={<SearchBar />}/>
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
