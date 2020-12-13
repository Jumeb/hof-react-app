import  React from 'react';

import './CreateEvent.component.css';

const CreateEvent = (props) => {
    const {setIsOpen} = props
    return (
        <button className="createButton" onClick={() => setIsOpen()}><span className="fas fa-calendar-plus createButtonIcon" /></button>
    )
}

export default CreateEvent;