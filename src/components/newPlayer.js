function NewPlayer(props){

  const {change} = props
  return (<div>
      <div>Neuer Spieler</div>
      <button type = "button" onClick = {() => {change(2)}}>Zurück</button>
      </div>)


}

export default NewPlayer