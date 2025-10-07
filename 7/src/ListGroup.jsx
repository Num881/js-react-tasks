import React from 'react';

// BEGIN (write your solution here)
const ListGroup = ({children}) => {
    return (
        <ul className="list-group">
            {React.Children.map(children, (child) => (
                <li className='list-group-item'>{child}</li>
            ))}
        </ul>
    )
}
export default ListGroup;
// END
