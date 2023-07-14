import { useEffect } from "react"
import { getAllPlayers } from "../firebase/firebase"
function Lobby(props){

    const {change} = props

    const loadData = async()=>{
        const data = await getAllPlayers()
        console.log(data)
    }

    useEffect(()=>{
        loadData()
    },[])

    return (<div>
              <button type = "button" onClick={()=>{change(4)}}>Spiel eintragen</button>
              <button type = "button" onClick= {()=>{change(3)}}>Neuer Spieler</button>
              <div>Coole Rangliste</div>
          </div>)


}

export default Lobby