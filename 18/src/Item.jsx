import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onToggle }) => (
    <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col">
            {task.state === 'finished' ? (
                <s>
                    <a href="#" className="todo-task" onClick={(e) => { e.preventDefault(); onToggle(); }}>
                        {task.text}
                    </a>
                </s>
            ) : (
                <a href="#" className="todo-task" onClick={(e) => { e.preventDefault(); onToggle(); }}>
                    {task.text}
                </a>
            )}
        </div>
    </div>
);

export default Item;
// END
