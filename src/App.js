import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBillModal from "./Pages/Home/AddBillModal/AddBillModal";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add-billing" element={<AddBillModal />}/>
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
