import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://mymodernmet.com/wp/wp-content/uploads/2020/02/international-landscape-photographer-of-the-year-thumbnail.jpg"
                        alt="landscape.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
