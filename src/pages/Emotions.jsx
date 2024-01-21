import Header from "../components/Header"
import logo from "../images/JournallyLogo.png"
import Footer from "../components/Footer"
import MoodChecklist from "../components/MoodChecklist"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';



export default function Emotions(props) {
    const [mood, setMood]=useState();
    const navigate = useNavigate();

    
    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2>How are you feeling?</h2>
            <p>Select one.</p>
            <MoodChecklist mood={setMood}/>
            <button id="emotionsButton" onClick={() => navigate("/prompttype")}>Next</button>
            <Footer/>
        </div>
    )
}