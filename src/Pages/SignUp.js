import React from "react";
import axios from "axios";
import { Box, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
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
        <Box as="form" onSubmit={this.handleSubmit} py={3}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button>Beep</Button>
        </Box>
      </div>
    );
  }
}

export default withRouter(SignUp);
