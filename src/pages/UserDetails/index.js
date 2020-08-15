import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FaFolder, FaGithub, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { ContentDetails, Loading, Owner, RepoList } from './styles';

export default function MoreDetails(props) {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [repositories, setRepositories] = useState({});

  const getData = async () => {
    const { user } = props.match.params;

    const [u, r] = await Promise.all([
      api.get(`users/${user}`),
      api.get(`users/${user}/repos`),
    ]);

    setUserDetails(u);
    setRepositories(r);

    setLoading(false);
  };

  useEffect(() => {
    getData();

    console.log(repositories);
  }, [loading]);

  if (loading) {
    return (
      <Loading>
        {/* <FaSpinner color="#fff" size={50} /> */}
        <p>Loading...</p>
      </Loading>
    );
  }

  const { data: u } = userDetails;
  const { data: r } = repositories;

  return (
    <ContentDetails>
      <Link to="/">
        <span>&#60; Back</span>
      </Link>

      <Owner>
        <img src={u.avatar_url} alt={u.name} />
        <div>
          <h1>{u.name}</h1>
          <h2>{u.bio}</h2>
          <a href={`https://github.com/${u.login}`} target="_blank">
            View on Github <FaGithub color="#fff" size={20} />
          </a>
        </div>
      </Owner>

      <RepoList>
        {r.map((repository) => (
          <div>
            <FaFolder color="#33B5FF" size={20} />
            <a
              href={`https://github.com/${u.login}/${repository.name}`}
              key={repository.id}
            >
              {repository.name}
            </a>
          </div>
        ))}
      </RepoList>
    </ContentDetails>
  );
}
