import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    try {
      const url = process.env.REACT_APP_API_BASE_URL + "api/accounts/sign-up";
      const response = await axios.post(url, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      });
      console.log(response);
      this.props.history.push({
        pathname: "/payment",
        data: {
          accountId: response.data.account._id,
          token: response.data.token
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <p>Sign Up</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
