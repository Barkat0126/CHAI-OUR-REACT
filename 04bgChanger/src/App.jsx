import { useState } from "react"


function App() {
  const [Color, setColor] = useState("white")
  return (
    <>
     <div className="w-full h-screen duration-100"
     style={{backgroundColor: Color}}
     >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center bottom-10 gap-3 shadow-lg bg-gray-400 py-2 px-6 rounded-3xl">

          <button onClick={() => setColor("red")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => setColor("Green")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}>Green</button>

          <button onClick={() => setColor("blue")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}>blue</button>

          <button onClick={() => setColor("Orange")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}>Orange</button>

          <button onClick={() => setColor("yellow")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}>yellow</button>

          <button onClick={() => setColor("Indigo")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Indigo"}}>Indigo</button>

          <button onClick={() => setColor("Violet")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Violet"}}>Violet</button>

          </div>
        </div>
     </div>
    </>
  )
}

export default App
