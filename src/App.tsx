import { useState } from "react";
import RegularFetchTab from "./RegularFetchTab";
import TanStackTab from "./TanStackTab"

export default function App(){
    const[tab, setTab]= useState('regular');
    return (
        <main>
            <button onClick={()=> setTab('regular')}>Regular Fetch</button>
            <button onClick={()=> setTab('tanstack')}>Tanstack Fetch</button>
            {tab === 'regular' ? <RegularFetchTab/> : <TanStackTab/>}
        </main>
    )
  
}



