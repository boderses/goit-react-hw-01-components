import styled from '@emotion/styled';

export const StyledItem = styled.li`
display: flex;
margin-left: 30px;
margin-bottom: 5px;
`

export const StyledSpan = styled.span`
width: 13px;
height: 13px;
margin-right: 15px;
margin-top: 20px;
background-color: ${({ status }) => (status ? "green" : "red")};
border-radius: 50%;
`;