import styled from 'styled-components';

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 20px 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.28); 
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.28);
  @media screen and (max-width: 768px){
    margin: 5px 0;
  }
`