import styled from 'styled-components';

export const Profile = styled.div`
margin: auto;
border: 1px solid black;
width: 360px;
box-shadow: 5px 10px 16px -2px rgba(0,0,0,0.27);

`

export const Main = styled.div`
  margin: auto;
  width: 320px;
  padding: 20px;
  background-color: #f7f7f5  ; 
`

export const Photo = styled.img`
width: 140px;
height: 140px;
display: block;
margin-left: auto;
margin-right: auto;
`;


export const UserName = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`
export const Tag = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: grey;
`
export const Location = styled.p`
font-size: 20px;
font-weight: 500;
text-align: center;
color: grey;
`

export const Stats = styled.ul`
display: flex;
border-top: 1px solid black;
  margin: 0;
  padding: 0;
  list-style: none;
  
`
export const StatsItem = styled.div`
padding: 10px;
  margin: 0;
  background-color: #d9d9d9;
  color: rgb(75, 73, 73);
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 33%;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`

export const Label = styled.span`
display: flex;
  flex-direction: column;
  justify-content: center;
  color: grey;
  font-size: 15px;
`

export const Quantity = styled.span`
  display: block;
  margin-top: 8px;
  color: rgb(41, 38, 54);
  font-size: 18px;
  font-weight: 700;
`;