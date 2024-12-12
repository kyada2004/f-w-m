import Home from "./Componet/Home";
import About from "./Componet/About";
import Food  from "./Componet/Food";
import Doner from "./Componet/Doner";
import Admin from "./Componet/Admin";
import { Route, Routes } from "react-router-dom";
import Subroute from "./Componet/Admin/subroute";
import Donersubroute from "./Componet/Donerportal/Donersubroute";
import Donernavabar from "./Componet/Donerportal/Donernavabar";
import AdminNav from "./Componet/Admin/AdminNav";
import ContactUs from "./Componet/ContactUs";


function App() {
  return (
    <div className="App">
     
   
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/doner" element={<Doner />}></Route>
        <Route path="/admin" element={< Admin />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/admin/adminNav" element={<AdminNav/>}></Route>
        <Route path="/doner/*" element={<Donersubroute />} />
        <Route path="/doner/donernavabar" element={<Donernavabar/>}></Route>

        <Route path="*" element={<Subroute />} />

      </Routes>

    </div>
  );
}

export default App;
