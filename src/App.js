import { useEffect, useState } from "react";
import "./App.css"
import { Menu } from "./app/menu/menu";
import { Search } from "./app/search/search";
import { Blank } from "./utils/utils";
import { Articles } from "./app/articles/article";

function App() {

  const [scrollHeight, setScrollHeight] = useState("none")
  const [media, setMedia] = useState([])

  /*function fetchItems() {
    setMedia([...media])
  }*/

  useEffect(()=>{
      const handleScroll = ()=> {
          setScrollHeight(window.scrollY)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <header className="banner">
        <Menu scrollHeight={scrollHeight}/>
        <Blank/>
        <div className="text-white text-2xl font-bold text-center pt-12 pb-4">
            <h2>Telecharger librement et gratuitement des contenus sur Madagascar</h2>
            <p className="text-sm/[10px] font-light pt-2">Plus de details sur la <a className="underline">Licence des contenus</a></p>
        </div>
        <div style={{ width: "1000px", margin: "auto" }}>
          <Search />
        </div>
      </header>
      <article className="py-12 px-4">
          <Articles items={media} />
      </article>
    </div>
  );
}

export default App;
