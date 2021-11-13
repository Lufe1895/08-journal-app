import dayjs from "dayjs";
import React from 'react'
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, body, date, title, url }) => {
    const dispatch = useDispatch();
    const noteDay = dayjs(date);

    const handleEntryClick = () => {
        dispatch(activeNote(id, { 
            body, date, title, url
        }));
    }

    return (
        <div className="journal__entry pointer" onClick={ handleEntryClick }>
            {
                url && 
                    <div 
                        className="journal__entry-picture"
                        style={{ 
                            backgroundSize: 'cover',
                            backgroundImage: `url(${ url })`
                        }}
                    ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>

                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDay.format('dddd') }</span>
                <h4>{ noteDay.format('DD') }</h4>
            </div>
        </div>
    )
}
