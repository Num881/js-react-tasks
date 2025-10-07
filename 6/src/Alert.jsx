import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Alert = ({ text, type }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {text}
        </div>
    );
};
export default Alert;
// END
