function Loading(props){
  const {change} = props
  return (
    <div>
      <div>Dart Club</div>
      <div>
            Regel: Ihr verliert kein Wort über den Dart Club.
            Regel: Ihr verliert KEIN WORT über den Dart Club.
            Regel: Wenn jemand „Stop“ ruft, schlappmacht oder abklopft, ist das Spiel vorbei.
            Regel: Es Spielen jeweils nur Zwei.
            Regel: Nur ein Spiel auf einmal.
            Regel: Keine Hemden.
            Regel: Die Spiele dauern genau solange, wie sie dauern müssen.
            Regel: Wer neu ist im Dart Club, muss Spielen.
      </div>
      <div>Ich bin ein Bild</div>
      <button type="button" onClick = {() => {change(2)}}>Start</button>
    </div>
  )
    


}

export default Loading