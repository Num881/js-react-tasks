import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            inputValue: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { inputValue } = this.state;
        if (inputValue.trim() === '') {
            return;
        }
        this.setState((prevState) => ({
            tasks: [{ id: uniqueId('task-'), text: inputValue.trim() }, ...prevState.tasks],
            inputValue: '',
        }));
    }

    handleRemove(id) {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== id),
        }));
    }

    render() {
        const { tasks, inputValue } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={inputValue}
                                required
                                className="form-control"
                                placeholder="I am going..."
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            add
                        </button>
                    </form>
                </div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <Item task={task.text} onRemove={() => this.handleRemove(task.id)} />
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default TodoBox;
// END
