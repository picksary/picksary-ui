import { useEffect, useId, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("")
  const reference = useRef()
  useId()
  useEffect(()=>{
    console.log(name);
  }, [name])

  return (
    <div className="App">
      <p>Picksary</p>
      <input type="text" name="name" onChange={e => setName(e.target.value)}/>
      <div>
        { name }
      </div>
      <input type="text" name="reference" ref={reference}/>
    </div>
  );
}

export default App;
