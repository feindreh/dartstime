function Player(props){
    const {p} = props
    return (
        <div>
            <div>{p.name} {p.elo}</div>
        </div>
    )
}

function Ladder(props){
    const {players} = props
    players.sort((a,b) => b.elo - a.elo)
    return (
        <div>
            <div>Ich bin Die Rangliste</div>
            {players.map((p) => {
               return <Player key = {p.id} p = {p}/>
            })}
        </div>
    )
}

export default Ladder