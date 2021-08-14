import React, { useState } from 'react';
import { MdDelete, MdDeleteForever } from 'react-icons/md';


function ShowDelete({ exercise, onDelete }) {
    const [shouldDelete, setDelete] = useState(false);
    const toggleDelete = () => setDelete(!shouldDelete);
    
    return (
        <>
        <td>
            {shouldDelete
                ? <MdDeleteForever onMouseEnter={toggleDelete} onMouseLeave={toggleDelete} onClick={() => onDelete(exercise._id)}/>
                : <MdDelete onMouseEnter={toggleDelete} onMouseLeave={toggleDelete}/>
            }
        </td>
        </>
    );
}

export default ShowDelete;