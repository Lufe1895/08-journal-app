import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body } = formValues;
    const activeId = useRef(note.id);
    const dispatch = useDispatch();

    useEffect(() => {
        if(note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [reset, note]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name='title'
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name='body'
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    note.url &&
                        <div className="notes__image">
                            <img
                                src="https://mymodernmet.com/wp/wp-content/uploads/2020/02/international-landscape-photographer-of-the-year-thumbnail.jpg"
                                alt="landscape.jpg"
                            />
                        </div>
                }
            </div>
        </div>
    )
}
