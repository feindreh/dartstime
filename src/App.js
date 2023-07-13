import { useState } from "react";
import "./css/style.css"
import Loading from "./components/loading";
import Lobby from "./components/lobby"
import NewPlayer from "./components/newPlayer";
import NewGame from "./components/newGame";

function App() {

  const [state,setState] = useState(1)
  // 1 = Loading
  // 2 = Lobby
  // 3 = new Player
  // 4 = new Game

  switch(state){
    case 1 :
      return(<div className = "App"> <Loading change = {setState}/> </div>)
    case 2 : 
      return(<div className = "App"> <Lobby  change = {setState}/> </div>)
    case 3 : 
      return (<div className = "App"> <NewPlayer  change = {setState}/> </div>)
    case 4 :
      return (<div className = "App"> <NewGame  change = {setState}/> </div>)
    default:
      return <div>Upsi</div>
  }
  
}

export default App;
