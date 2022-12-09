import styled from 'styled-components';

export const Transaction = styled.div`
margin-top: 40px;
margin-bottom: 20px;
`

export const TransactionTable = styled.table`
margin: 0 auto;
width: 600px;
table-layout: auto;
box-shadow: 5px 10px 16px -2px rgba(0,0,0,0.27);
`

export const TransactionHead = styled.thead`
font-weight: 700;
color: #000000;
`
export const TransactionTr = styled.tr`
background-color: #ccd9e8;
height: 40px;
padding: 10px;
`
export const TransactionBody = styled.tbody`
background-color: #fff;
text-align: center;
`

export const TransactionBodyTd = styled.td`
padding: 10px;
`
export const TransactionBodyTr = styled.tr`
&:nth-child(2n) {
    background-color: #ebebeb;
}
`
