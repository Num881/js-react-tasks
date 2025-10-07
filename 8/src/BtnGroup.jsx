import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: null,
        };

        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }

    handleLeftClick() {
        this.setState({ activeButton: 'left' });
    }

    handleRightClick() {
        this.setState({ activeButton: 'right' });
    }

    render() {
        const { activeButton } = this.state;

        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={cn('btn', 'btn-secondary', 'left', { active: activeButton === 'left' })}
                    onClick={this.handleLeftClick}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={cn('btn', 'btn-secondary', 'right', { active: activeButton === 'right' })}
                    onClick={this.handleRightClick}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default BtnGroup;
// END
