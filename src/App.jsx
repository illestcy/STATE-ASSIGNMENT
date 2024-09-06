import { useState } from "react";
import viteLogo from "/vite.svg"
import PlaylistButton from "./components/PlaylistButton";

function App() {

  let [pamagat, setPamagat] = useState();
  //TODO: Comment or delete the currentTrack variable and replace it with useState. 
  //      The goal is to show the current track playing on click events.

  //let currentTrack;

  function handleClick(trackTitle){
    console.log(trackTitle); //check console to see what this function do.
    setPamagat(trackTitle);
  }

  return (
    <>
      <main className="flex flex-col gap-4 w-full min-h-screen justify-center items-center">

        {/* TERNARY OPERATOR - puwede ninyong i-advance reading ito but basically similar siya sa if statement */}
        <h1>{pamagat ? "Now Playing: " + pamagat : "Select a music"}</h1>

        <button 
          onClick={()=>handleClick("Track title 1")} //uses arrow function. Discuss ko next week kung bakit arrow function ginamit dito.
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">Track Title 1</h4>
            <p className="text-neutral-400">Artist</p>
          </div>
        </button>

        <button 
          onClick={()=>handleClick("Track title 2")} 
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">Track Title 2</h4>
            <p className="text-neutral-400">Artist</p>
          </div>
        </button>

        <button 
          onClick={()=>handleClick("Track title 3")} 
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">Track Title 3</h4>
            <p className="text-neutral-400">Artist</p>
          </div>
        </button>

        <button 
          onClick={()=>handleClick("Track title 4")} 
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">Track Title 4</h4>
            <p className="text-neutral-400">Artist</p>
          </div>
        </button>

      </main>
    </>
  );
}

export default App;
