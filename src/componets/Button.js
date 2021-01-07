import styled from 'styled-components';

export const Button = styled.a`
padding: 23px 42px;
color: ${({primary}) => (primary ? '#000' : '#fff')};
border: 2px solid #E2B024;
/* margin-right: 60px; */
cursor: pointer;
transition: 0.3s ease;
background: ${({primary}) => (primary ? '#E2B024' : 'transparent')};
&:hover{
    color: ${({primary}) => (primary ? '#fff' : '#fff')};
    background: ${({primary}) => (primary ? '#F59815' : '#F59815')}; 
}
`