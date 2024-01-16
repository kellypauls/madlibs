import React from "react";

function Story({ setShowStory, setStory, story }) {
    const newStory = () => {
        setShowStory(false);
        setStory([]);
    };

    
    return (
        <div>
            <p>
                There was a {story.color} {story.nounOne} who loved a {story.adjective} {story.nounTwo}
            </p>
            <button onClick={newStory}>New Story!</button>
        </div>
    )
}

export default Story