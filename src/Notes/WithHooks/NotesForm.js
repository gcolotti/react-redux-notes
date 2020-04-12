import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/actions/actions';

const NotesForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmission = event => {
        event.preventDefault();

        dispatch(addNote(title, content));

        setTitle('');
        setContent('');
    }

    return (
        <div>
            <h3>Add a Note</h3>

            <form onSubmit={handleSubmission}>
                Title: <br />
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/><br />

                Content: <br />
                <textarea name="content" value={content} onChange={e => setContent(e.target.value)}></textarea><br />

                <button type="submit">Add Note</button>
            </form>
        </div>
    )
}

export default NotesForm;