
import Header from "../components/Header"
import Footer from "../components/Footer"
import PromptTypes from "./PromptType"
import selectPrompts from "../Logic.js"


import logo from "../images/logo.png"
import { useState } from "react"
import JournalPage from "../components/JournalPage";
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';




export default function Write(props) {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [response, setResponse]=useState("");
    let prompt = selectPrompts(state.promptType, state.state.mood);
    


    //  console.log("PROMPT TYPE: " + JSON.stringify(state.promptType))
    //  console.log("STATE: " + JSON.stringify(state))
    //  console.log("MOOD: " + JSON.stringify(state.state.mood))
    //  console.log("PROMPT: " + prompt);

    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2 className="promptTitle">You picked a {state.promptType.toLowerCase()} for a(n) {state.state.mood} mood</h2>
            <div className="writingArea"><h3>{prompt}</h3>
            <div >
            <JournalPage response={setResponse} />
            <button className="button" onClick={() =>navigate("\sendoff")}>Send my writing to away!</button></div></div>
            <Footer/>

        </div>
    )
}

