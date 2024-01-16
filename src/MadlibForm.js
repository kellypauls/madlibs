import React, {useState} from "react";
import "./MadlibForm.css"

function MadlibForm({setShowStory, createStory}) {
    const INITIAL_STATE = {nounOne: "", nounTwo: "", adjective: "", color: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        createStory({...formData});
        setFormData(INITIAL_STATE);
        setShowStory(true);
    }
    return (
      <div className="madlib-form">
        <form onSubmit={handleSubmit}>
            <input 
            required
            id="nounOne"
            type="text"
            placeholder="noun"
            name="nounOne"
            value={formData.nounOne}
            onChange={handleChange}
            />
            <input 
            required
            id="nounTwo"
            type="text"
            placeholder="noun 2"
            name="nounTwo"
            value={formData.nounTwo}
            onChange={handleChange}
            />
            <input 
            required
            id="adjective"
            type="text"
            placeholder="adjective"
            name="adjective"
            value={formData.adjective}
            onChange={handleChange}
            />
            <input 
            required
            id="color"
            type="text"
            placeholder="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            />
            <button>Get Story</button>
        </form>
      </div>
    )
}

export default MadlibForm