import React from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';

// BEGIN (write your solution here)
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrev() {
        const { images } = this.props;
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex - 1 + images.length) % images.length,
        }));
    }

    handleNext() {
        const { images } = this.props;
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex + 1) % images.length,
        }));
    }

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        if (!images || images.length === 0) {
            return null;
        }

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((src, index) => (
                        <div
                            key={uniqueId('carousel-item-')}
                            className={cn('carousel-item', { active: index === activeIndex })}
                        >
                            <img alt="" className="d-block w-100" src={src} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.handlePrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    onClick={this.handleNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Slider;
// END