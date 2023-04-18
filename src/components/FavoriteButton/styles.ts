import styled from "styled-components";

interface ButtonProps {
  isFavorite: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ isFavorite }) => (isFavorite ? "#0077cc" : "#333")};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;


  &:hover {
    background-color: ${({ isFavorite }) => (isFavorite ? "#0077cc" : "#333")};
  }

`;
