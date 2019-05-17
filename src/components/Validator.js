import React from 'react';

const Validator = props => (
    <div className="frankie" >
        { props.query.toLowerCase() === "fish" ? "Yummmm" : "I WANT FISH"}
    </div>
);

export default Validator;
