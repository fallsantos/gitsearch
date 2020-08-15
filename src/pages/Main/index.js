import React, { Component } from 'react';
import { FaGitAlt, FaPlus, FaSpinner, FaSearch } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { Container, Form, SubmitButton, User, Fail } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    newUser: '',
    user: '',
    repositories: [],
    loading: false,
    fail: false,
  };

  handleInputChange = (e) => {
    this.setState({ user: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { user, newRepo, newUser, repositories } = this.state;

    const data = {}; // Cria um objeto

    await api
      .get(`/users/${user}`)
      .then((response) => {
        data.name = response.data.name;
        data.avatar = response.data.avatar_url;
        data.username = response.data.login;

        this.setState({
          fail: false,
          newUser: data,
          user: '',
          loading: false,
        });

        // console.log(this.state.repositories);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        this.setState({
          newUser: '',
          user: '',
          fail: true,
          loading: false,
        });
      });
  };

  handleUser = () => {
    const { fail } = this.state;

    if (fail) {
      return (
        <Fail>
          <h2>User not found!</h2>
        </Fail>
      );
    }

    const { newUser } = this.state;

    if (newUser) {
      return (
        <User>
          <img src={newUser.avatar} alt={newUser.name} />

          <div>
            <h2>{newUser.name}</h2>
            <Link to={`details/${newUser.username}`}>More details +</Link>
          </div>
        </User>
      );
    }
    return '';
  };

  render() {
    const { user, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGitAlt />
          GitSearch
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for user"
            value={user}
            onChange={this.handleInputChange}
            required
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaSearch color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
        {this.handleUser()}
      </Container>
    );
  }
}
