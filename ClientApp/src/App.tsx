import { FetchData } from "./FetchData";
import React, { useEffect, useState } from "react";


const PromptComp : React.FC = () => {

    const [prompt, setPrompt] = useState<string | null>(null);

    const callPrompt = async () => {
        if(!prompt){
            const call = await fetch("prompt");
            console.log(call)
            const data : {data: string } = await call.json();

            setPrompt(data.data);
            console.log(data)    
        }
    }

    return <button onClick={callPrompt}>{prompt ?? "call"}</button>
}

export const HW = () => {
    return <div className="container"  >

        <img src="images/praia.jpg" alt="" />
        
        que onda mundoxxx
        {/* <FetchData/> */}
        <PromptComp/>        
    </div>
}