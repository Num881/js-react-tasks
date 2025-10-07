import React from 'react';

// BEGIN (write your solution here)
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                address: '',
                city: '',
                country: '',
                acceptRules: false,
            },
            isSubmitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: type === 'checkbox' ? checked : value,
            },
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isSubmitted: true });
    }

    handleBack() {
        this.setState({ isSubmitted: false });
    }

    render() {
        const { formData, isSubmitted } = this.state;

        if (isSubmitted) {
            const sortedFields = Object.keys(formData).sort().map((key) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{formData[key].toString()}</td>
                </tr>
            ));

            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleBack}>
                        Back
                    </button>
                    <table className="table">
                        <tbody>{sortedFields}</tbody>
                    </table>
                </div>
            );
        }

        return (
            <form name="myForm" onSubmit={this.handleSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="col-form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">
                        Address
                    </label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="address"
                        id="address"
                        placeholder="1234 Main St"
                        value={formData.address}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">
                        City
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        className="form-control"
                        value={formData.country}
                        onChange={this.handleChange}
                    >
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input
                                id="rules"
                                type="checkbox"
                                name="acceptRules"
                                className="form-check-input"
                                checked={formData.acceptRules}
                                onChange={this.handleChange}
                            />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign in
                </button>
            </form>
        );
    }
}

export default MyForm;
// END
