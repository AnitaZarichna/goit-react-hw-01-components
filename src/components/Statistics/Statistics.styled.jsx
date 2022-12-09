import styled from 'styled-components';

export const Statistic = styled.section`
  width: 360px;  
  background-color: #f7f7f5 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px 16px -2px rgba(0,0,0,0.27);
  border-radius: 10px;
`

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #d9d9d9;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  border-top: 1px solid #000;
  border-radius: 10px;
`;

export const Item = styled.li`
  margin: 0;
  align-items: center;
  text-align: center;
  color: rgb(75, 73, 73);
  font-size: 15px;
  padding: 10px;
  flex-basis: 20%;
  &:not(:last-child) {
    border-right: 1px solid #000;
  }
`;
export const Label = styled.span`
  display: flex;
  flex-direction: column;
  color: rgb(41, 38, 54);
  font-size: 20px;
`;

export const Percentage = styled.span`
  display: block;
  padding-top: 8px;
  margin-top: 8px;
  color: rgb(41, 38, 54);
  font-size: 18px;
  font-weight: 700;
`;