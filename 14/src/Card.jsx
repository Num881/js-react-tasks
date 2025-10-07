import React from 'react';

// BEGIN (write your solution here)
const Card = ({ children }) => (
    <div className="card">
        {children}
    </div>
);

const Body = ({ children }) => (
    <div className="card-body">
        {children}
    </div>
);

const Title = ({ children }) => (
    <h4 className="card-title">
        {children}
    </h4>
);

const Text = ({ children }) => (
    <p className="card-text">
        {children}
    </p>
);

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;
// END
