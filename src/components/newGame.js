import { getAllPlayers } from "../firebase/firebase"
import { useState,useEffect } from "react"

function NewGame(props){
    const {change} = props

    const [players,setPlayers] = useState([])
    const [playerOne,setPlayerOne] = useState("")
    const [playerTwo,setPlayerTwo] = useState("")
    
    const loadData = async()=>{
        const data = await getAllPlayers()
        setPlayers(data)
    }

    useEffect(()=>{
        loadData()
    },[])



    return (
    <div>
        <div>Spiel eintragen</div>
        <button type = "button" onClick = {() => {change(2)}}>Zurück</button>
        
        <select onChange = {(e)=>{setPlayerOne(e.target.value)}}name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            {players.map((p) => {
                return (<option key = {p.id}>
                    {p.name}
                </option>)
            })}
        </select>
        
        <select onChange = {(e)=>{setPlayerTwo(e.target.value)}}name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            {players.map((p) => {
                return (<option key = {p.id}>
                    {p.name}
                </option>)
            })}
        </select>
        
        <button type="button" onClick = {()=>{console.log(playerOne,playerTwo)}}>Bestätigen</button>

    </div>
    )


}

export default NewGame