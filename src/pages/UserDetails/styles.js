import styled from 'styled-components';

export const ContentDetails = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  a {
    text-decoration: none;
    font-weight: bold;
  }

  a span {
    /*border: 1px solid blue;*/
    border-radius: 4px;
    padding: 10px;
    transition: all 0.5s;
  }

  a span:hover {
    background: #1c1c1c;
    color: #fff;
  }

  h1 {
    margin-top: 20px;
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
`;

export const Owner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  h1 {
    color: #000080;
  }

  h2 {
    margin-bottom: 10px;
    color: grey;
    font-size: 15px;
  }

  img {
    /*border: 1px solid red;*/
    width: 150px;
    border-radius: 50%;
  }

  div {
    /*border: 1px solid red;*/
    flex: 1;
    padding-left: 10px;
  }

  div a {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1c1c1c;
    width: 150px;
    padding: 10px;
    border-radius: 10px;
    transition: background 1s;
  }

  div a:hover {
    background: #0000ff;
  }
`;

export const RepoList = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    margin-top: 10px;
    align-items: center;
  }

  div a {
    margin-left: 10px;
    transition: font-size 0.5s;
  }

  div a:hover {
    font-size: 15px;
  }
`;
