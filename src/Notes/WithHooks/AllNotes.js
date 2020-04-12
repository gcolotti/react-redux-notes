import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeNote } from '../../redux/actions/actions';

const AllNotes = () => {

  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const notesItems = notes.map((note, index) =>
    <li key={index}>
      <b>{note.title}</b>
      <button onClick={() => dispatch(removeNote(index))}>x</button>
      <br />
      <span>{note.content}</span>
    </li>
  );

  return (
    <div>
      <h3>All Notes (with hooks)</h3>

      <ul>
        {notesItems}
      </ul>
    </div>
  )
}

export default AllNotes;