import React from 'react';

const Validator = props => (
    <div className="frankie" style={{color: props.query.toLowerCase() === "fish" ? "green" : "red"}}>
        { props.query.toLowerCase() === "fish" ? "Yummmm" : "I WANT FISH"}
    </div>
);

export default Validator;
