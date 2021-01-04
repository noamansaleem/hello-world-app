import React from 'react';
import './index.css';

const Gate = ({ isOpen }) => {
    return <p className="isOpen"><strong>{isOpen == true ? "open!" : "closed!"}</strong>
        <br />
    This is Gate component.
    </p>
}

export default Gate;