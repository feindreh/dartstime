function NewGame(props){
    const {change} = props
    return (<div>
        <div>Spiel eintragen</div>
        <button type = "button" onClick = {() => {change(2)}}>Zurück</button>
        </div>)


}

export default NewGame