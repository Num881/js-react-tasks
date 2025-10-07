import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.opened !== false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(event) {
        event.preventDefault();
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    }

    render() {
        const { text } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={isOpen}
                        onClick={this.handleToggle}
                    >
                        Link with href
                    </a>
                </p>
                <div className={cn('collapse', { show: isOpen })}>
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        );
    }
}

export default Collapse;
// END
