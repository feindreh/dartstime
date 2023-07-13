function Lobby(props){

    const {change} = props

    return (<div>
              <button type = "button" onClick={()=>{change(4)}}>Spiel eintragen</button>
              <button type = "button" onClick= {()=>{change(3)}}>Neuer Spieler</button>
              <div>Coole Rangliste</div>
          </div>)


}

export default Lobby