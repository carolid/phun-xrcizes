import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div className="add-input">
            <h1 className="page-header">Add Exercise</h1>
            <input
                type="text"
                placeholder="Enter exercise name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                placeholder="Enter reps here"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Enter weight used here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                type = {unit}
                placeholder="Enter unit of measurement" 
                onChange={e => setUnit(e.target.value)} >
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input
                type="text"
                placeholder="Enter date"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;