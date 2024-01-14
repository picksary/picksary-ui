import { Route, Routes } from "react-router";
import "./App.css"
import { Profile } from "./app/profile/profile";
import { Home } from "./app/home/home"

function App() {

  return (
   <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/show" element={<Profile/>}></Route>
      </Routes>
   </>
  );
}

export default App;
