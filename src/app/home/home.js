import { useEffect, useState } from "react";
import { Menu } from "../menu/menu";
import { Search } from "../search/search";
import { Blank } from "../../utils/utils";
import { Articles } from "../articles/article";
import flower from "../../assets/banner-bg.jpg"
import street from "../../assets/street-8434099_1280.jpg"
import butterfly from "../../assets/butterfly-8449825_1280.png"
import cotton from "../../assets/cotton-top-tamarin-8463471_1280.jpg"
import duck from "../../assets/duck-8469484_1280.jpg"
import moutain from "../../assets/mountain-8433234_1280.jpg"
import mountains from "../../assets/mountains-8492823_1280.jpg"
import man from "../../assets/man-7886201_1280.jpg"

function Home() {

  const [scrollHeight, setScrollHeight] = useState("none")
  const [media, setMedia] = useState([[street,cotton, butterfly, duck, mountains, man,moutain, flower]])

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
      <header className="banner grid grid-cols-8 gap-4">
        <Menu scrollHeight={scrollHeight}/>
        <div className="col-start-3 col-span-4 text-white text-2xl font-bold text-center pt-12 pb-4">
            <Blank />
            <h2>Telecharger librement et gratuitement des contenus sur Madagascar</h2>
            <p className="text-sm/[10px] font-light pt-2">Plus de details sur la <a className="underline">Licence des contenus</a></p>
            <Search />
        </div>
      </header>
      <article className="py-12 px-4">
          <Articles items={media} />
      </article>
    </div>
  );
}

export default Home;
