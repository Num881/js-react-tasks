import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
class EventLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        this.setState((prevState) => {
            const lastValue = get(prevState.log, [0, 'value'], 0);
            return {
                log: [{ id: uniqueId('log-'), value: lastValue + 1 }, ...prevState.log],
            };
        });
    }

    handleSubtract() {
        this.setState((prevState) => {
            const lastValue = get(prevState.log, [0, 'value'], 0);
            return {
                log: [{ id: uniqueId('log-'), value: lastValue - 1 }, ...prevState.log],
            };
        });
    }

    handleRemove(id) {
        this.setState((prevState) => ({
            log: prevState.log.filter((entry) => entry.id !== id),
        }));
    }

    render() {
        const { log } = this.state;

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={this.handleAdd}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.handleSubtract}
                    >
                        -
                    </button>
                </div>
                {log.length > 0 && (
                    <div className="list-group">
                        {log.map(({ id, value }) => (
                            <button
                                key={id}
                                type="button"
                                className="list-group-item list-group-item-action"
                                onClick={() => this.handleRemove(id)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default EventLog;
// END
