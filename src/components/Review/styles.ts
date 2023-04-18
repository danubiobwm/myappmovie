import styled from 'styled-components';
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface FavoriteButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  active?: boolean;
}


export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StarsContainer = styled.div`
  display: flex;
`;

export const StarIcon = styled.i<FavoriteButtonProps>`
  color: ${({ active }) => active ? '#FFD700' : '#d3d3d3'};
  font-size: 2rem;
  cursor: pointer;
`;

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  color: ${({ active }) => active ? '#FFD700' : '#d3d3d3'};
  font-size: 2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;