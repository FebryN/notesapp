import React from 'react';
import {Link} from 'react-router-dom';


let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getContent = (note) => {
  
  if(note.body.length > 45){
    return note.body.slice(0, 45) + '...'
  } else {
    return note.body
  }
}

const ListItem = ({note}) => {
  return <Link to={`/note/${note.id}/`}>
            <div className='notes-list-item'>
              <h3>{note.title}</h3>
              <p><span>{getTime(note)}</span></p>
            </div>
        </Link>;
};

export default ListItem;
