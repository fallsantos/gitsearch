import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => (props.error ? `red` : `#fff`)};
  font-family: arial, helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;

export const User = styled.div`
  border: 1px solid #7159c1;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    margin-right: 10px;
    border-radius: 50%;
  }

  div {
    text-align: right;
  }

  a {
    text-decoration: none;
    color: blue;
    transition: font-weight none;
  }

  a:hover {
    font-weight: bold;
  }
`;

export const Fail = styled.div`
  border: 1px solid red;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;

  h2 {
    color: red;
    text-align: center;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(({ loading }) => ({
  type: 'submit',
  disabled: loading,
}))`
  background: #32cd32;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      background: #daa520;

      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-styled: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
