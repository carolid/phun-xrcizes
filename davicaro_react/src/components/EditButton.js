import React, { useState } from 'react';
import { MdEdit, MdBorderColor } from 'react-icons/md';

function ShowEdit({ exercise, onEdit }) {
    const [edit, setEdit] = useState(false);
    const toggleEdit = () => setEdit(!edit);
    
    return (
        <>
        <td>
            {edit
                ? <MdBorderColor onMouseEnter={toggleEdit} onMouseLeave={toggleEdit} onClick={() => onEdit(exercise)}/>
                : <MdEdit onMouseEnter={toggleEdit} onMouseLeave={toggleEdit}/>
            }
        </td>
        </>
    );
}

export default ShowEdit;