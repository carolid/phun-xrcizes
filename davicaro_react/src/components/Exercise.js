import React from 'react';
import ShowEdit from "./EditButton"
import ShowDelete from './DeleteButton'; 
// import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><ShowEdit exercise={ exercise } onEdit={ onEdit } /></td>
            <td><ShowDelete exercise={ exercise } onDelete={ onDelete } /></td>
            {/* <td><MdEdit onClick={() => onEdit(exercise)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(exercise._id)} /></td> */}
        </tr>
    );
}

export default Exercise;