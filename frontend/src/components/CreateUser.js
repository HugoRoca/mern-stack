import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    users: [],
  };

  getUsers = async () => {
    const users = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: users.data });
  };

  async componentDidMount() {
    await this.getUsers();
  }

  onChangeEvent = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    await this.getUsers();
    this.setState({
      username: "",
    });
  };

  deleteUser = async (id) => {
    await axios.delete("http://localhost:4000/api/users/" + id);
    await this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create new user</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeEvent}
                  value={this.state.username}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
