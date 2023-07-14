import { useEffect, useState } from "react"

import { getAllPlayers } from "../firebase/firebase"

import Ladder from "./ladder"

function Lobby(props){

    const {change} = props
    const [players,setPlayers] = useState([])

    const loadData = async()=>{
        const data = await getAllPlayers()
        setPlayers(data)
    }

    useEffect(()=>{
        loadData()
    },[])

    return (<div>
              <button type = "button" onClick={()=>{change(4)}}>Spiel eintragen</button>
              <button type = "button" onClick= {()=>{change(3)}}>Neuer Spieler</button>
              <Ladder players = {players}/>
          </div>)


}

export default Lobby