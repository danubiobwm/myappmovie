import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 60%;
  height: 100%;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  height: 100%;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  &.search {
    background-color: #0077cc;
    color: #fff;

    &:hover {
      background-color: #005fa3;
    }
  }

  &.reset {
    background-color: #eee;
    color: #333;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export const Label = styled.label`
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--gray-700);
  font-weight: bold;
  margin-bottom: 0.5rem;
`;


export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const Pagination = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  cursor: pointer;

  background-color: ${(props) => (props.active ? "#0077cc" : "#eee")};
  color: ${(props) => (props.active ? "#fff" : "#333")};

  &:hover {
    background-color: ${(props) => (props.active ? "#005fa3" : "#ccc")};
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0;
  padding: 0 6rem;


  .movie-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h1 {
    font-size: 24px;
    margin-right: 20px;
  }

  img {
    max-width: 300px;
    margin-left: auto;
  }

  p {
    margin: 0;
  }

  span {
    font-weight: bold;
  }

`;