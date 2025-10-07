import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            inputValue: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggleTask = this.handleToggleTask.bind(this);
    }

    componentDidMount() {
        this.fetchTasks();
    }

    async fetchTasks() {
        try {
            const res = await axios.get(routes.tasksPath());
            this.setState({ tasks: res.data });
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { inputValue } = this.state;
        if (inputValue.trim() === '') {
            return;
        }
        try {
            const res = await axios.post(routes.tasksPath(), { text: inputValue.trim() });
            this.setState((prevState) => ({
                tasks: [res.data, ...prevState.tasks],
                inputValue: '',
            }));
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }

    async handleToggleTask(id, currentState) {
        const url = currentState === 'active'
            ? routes.finishTaskPath(id)
            : routes.activateTaskPath(id);
        const newState = currentState === 'active' ? 'finished' : 'active';

        try {
            const res = await axios.patch(url);
            this.setState((prevState) => {
                const index = prevState.tasks.findIndex((task) => task.id === id);
                return {
                    tasks: update(prevState.tasks, {
                        [index]: { $merge: { state: newState } },
                    }),
                };
            });
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        const { tasks, inputValue } = this.state;
        const activeTasks = tasks.filter((task) => task.state === 'active');
        const finishedTasks = tasks.filter((task) => task.state === 'finished');

        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
                        <div className="d-flex col-md-3">
                            <input
                                type="text"
                                value={inputValue}
                                required
                                className="form-control me-3"
                                placeholder="I am going..."
                                onChange={this.handleInputChange}
                            />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>
                {activeTasks.length > 0 && (
                    <div className="todo-active-tasks">
                        {activeTasks.map((task) => (
                            <Item
                                key={task.id}
                                task={task}
                                onToggle={() => this.handleToggleTask(task.id, task.state)}
                            />
                        ))}
                    </div>
                )}
                {finishedTasks.length > 0 && (
                    <div className="todo-finished-tasks">
                        {finishedTasks.map((task) => (
                            <Item
                                key={task.id}
                                task={task}
                                onToggle={() => this.handleToggleTask(task.id, task.state)}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default TodoBox;
// END
