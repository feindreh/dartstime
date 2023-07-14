

import app from "./app";
import {getFirestore,getDocs,collection,doc,setDoc} from "firebase/firestore";
import uniqid from 'uniqid';

const db = getFirestore(app);

const player = (name,elo,id) => {
        return {
            name,elo,id
        }
    }

//write
export async function makeNewPlayer(name){
    console.log("write")
    //check Name ?
    const id = uniqid()
    await setDoc(doc(db,"user",id),{
        name:name,
        elo:1500,
    })
}
//read
export async function getAllPlayers(){
    console.log("read")
    const players = await getDocs(collection(db, "user"));
    const res = []
    players.forEach((doc) => {
        const d = doc.data()
        res.push(player(d.name,d.elo,doc.id))
    })
    return res
  }
