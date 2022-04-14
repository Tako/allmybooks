import styled from 'styled-components';
import { Link } from "react-router-dom";
import { pinkRed } from '../variables/Variables';

export const BackLink = styled(Link)`
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background: transparent;
  font-weight: bold;
  color: ${pinkRed};
  position: absolute;
  left: 0;
  top: 10px;
`