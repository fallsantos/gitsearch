import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import api from '../../services/api';

import { Loading, ContentRepository } from './styles';

export default function Issues(props) {
  const { repository } = props.match.params;

  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);

  const getData = async () => {};

  useEffect(() => {
    alert('Oxe!');
  }, []);

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <ContentRepository>
      <h1>{repository}</h1>
    </ContentRepository>
  );
}
