import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


export const startNewNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: Date.now(),
        }
        const note = await addDoc(collection(db, `${ uid }/journal/notes`), newNote);

        dispatch(activeNote(note.id, newNote));
    }
};

export const activeNote = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async(dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});

export const startSaveNote = (note) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;

        if(!note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        await setDoc(doc(db, `${ uid }/journal/notes/${ note.id }`), noteToFirestore);
        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshNote = (id, note) => ({
    type: types.noteUpdate,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        const fileUrl = await fileUpload(file);
        console.log(fileUrl);
    }
}