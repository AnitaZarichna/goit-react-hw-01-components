import styled from 'styled-components';

export const FriendsSection = styled.div`
background-color: #ccd9e8;
margin-right: auto;
margin-left: auto;
margin-top: 20px;
border: 1px solid black;
width: 360px;
box-shadow: 5px 10px 16px -2px rgba(0,0,0,0.27);
border-radius: 10px;
`

export const FriendsUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`

export const FriensdItem = styled.li`
  margin: 0;
  display:flex;
  align-items: center;
  text-align: center;
  color: black;
  &:not(:last-child) {
  border-bottom: 1px solid #000;}
  flex-basis: 20%;
  padding: 10px;
`
export const Label = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  align-items: center;
  text-align: center;
`

export const Avatar = styled.img`
  display: block;
  margin-right: 10px;
`;

export const Name = styled.p`
font-size: 15px;
`;