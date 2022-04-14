import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import { white, pinkRed } from '../variables/Variables';

export const ReadMore = styled(Link)`
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${pinkRed};
  color: ${pinkRed};
  margin: 1em 0;
  padding: 0.25em 1em;
  &:hover{
    background-color: ${pinkRed};
    color: ${white};
  }
   ${props => props.primary && css`
    background: ${pinkRed};
    color: ${white};
    &:hover{
      background-color: ${white};
      color: ${pinkRed};
    }
  `}
`