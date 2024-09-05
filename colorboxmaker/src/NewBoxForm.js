import React, {useState} from "react";
import {v4 as uuid} from "uuid";


const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {width:"", height:"", color:""};
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = e => {
        e.preventDefault()
        addBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(fData => ({
            ...fData,
            [name]:value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height:</label>
            <input
                type="text"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="width">Width:</label>
            <input
                type="text"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="color">Color:</label>
            <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Create Box!</button>
        </form>
    )
}

export default NewBoxForm;