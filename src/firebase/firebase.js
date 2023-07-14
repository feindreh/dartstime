

import app from "./app";
import {getFirestore,getDocs,collection} from "firebase/firestore";

const db = getFirestore(app);



export async function getAllPlayers(){
    console.log("read")
    const player = (name,elo,id) => {
        return {
            name,elo,id
        }
    }
    
    
    
    const players = await getDocs(collection(db, "user"));
    const res = []
    players.forEach((doc) => {
        const d = doc.data()
        res.push(player(d.name,d.elo,doc.id))
    })
    return res
  }
