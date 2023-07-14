import { makeNewPlayer } from "../firebase/firebase"
import { useState } from "react"
function NewPlayer(props){

  const {change} = props

  const [name,setName] = useState("")

  const createPlayer = async()=>{
    await makeNewPlayer(name)
    change(2)
  }


  return (<div>
      <div>Neuer Spieler</div>
      <input type="text"  onChange = {(e)=>{setName(e.target.value)}}/>
      <button type="button" onClick={createPlayer}>Erstellen</button>
      <button type = "button" onClick = {() => {change(2)}}>Zurück</button>
      </div>)


}

export default NewPlayer