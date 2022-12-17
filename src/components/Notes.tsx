import React, { useState } from 'react';
import { isErrored } from 'stream';

type NotesProps = {
    users: User[];
    setUsers: (users: User[]) => void;
    notes: Note[],
    setNotes: (notes: Note[]) => void;
}

function Notes({ users, setUsers, notes, setNotes }: NotesProps) {
    const [userId, setUserId] = useState<number>(0);

    return (
        <>
        <p>
            <select onChange={(event) => setUserId(Number(event.target.value))}>
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
        </p>
        <ul>
            {notes.filter(note => note.userId === userId).map((note => <li key={note.id}>{note.text}</li>))}
        </ul>
        </>
    );
}

export default Notes;
