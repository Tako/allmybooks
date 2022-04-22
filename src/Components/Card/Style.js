import { pinkRed, white } from "../../style/variables/Variables";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const BookContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 20px 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.28);
  @media screen and (max-width: 768px) {
    margin: 5px 0;
  }
`;
export const TitleBook = styled.h1`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 80px;
  font-size: 1.6em;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImageContainer = styled.div`
  & img {
    width: 100%;
  }
`;

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
  &:hover {
    background-color: ${pinkRed};
    color: ${white};
  }
  ${props =>
    props.primary &&
    css`
      background: ${pinkRed};
      color: ${white};
      &:hover {
        background-color: ${white};
        color: ${pinkRed};
      }
    `}
`;
