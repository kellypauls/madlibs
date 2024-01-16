import React, {useState} from "react";
import MadlibForm from "./MadlibForm";
import Story from "./Story";
import { v4 as uuid } from 'uuid';
import "./Madlib.css"

function Madlib() {
    const INITIAL_STATE = [];
    const [story, setStory] = useState(INITIAL_STATE);
    const [showStory, setShowStory] = useState(false);
    const createStory = (newStory) => {
        setStory((entries) => [...entries, {...newStory, id: uuid()}]);
    };
    return (
        <div>
            <h1>MadLib!</h1>
            {showStory ? (
                <Story 
                setShowStory={setShowStory}
                setStory={setStory}
                story={story[0]}
                />
            ) : (
                <MadlibForm 
                setShowStory={setShowStory} 
                createStory={createStory}
                />
            )}
        </div>
    )
}

export default Madlib