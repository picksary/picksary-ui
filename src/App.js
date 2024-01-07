import { useEffect, useState } from "react";
import "./App.css"
import { Menu } from "./app/menu/menu";

function App() {

  const [scrollHeight, setScrollHeight] = useState("none")

  useEffect(()=>{
      const handleScroll = ()=> {
          setScrollHeight(window.scrollY)
          console.log(window.scrollY);
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div className="banner">
        <Menu scrollHeight={scrollHeight}/>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
