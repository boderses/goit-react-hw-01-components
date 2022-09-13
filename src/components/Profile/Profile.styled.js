import styled from '@emotion/styled';

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 320px;
  margin: 50px auto 50px auto;
  border: 2px solid gray;
  border-radius: 5px;
  box-shadow: 8px 7px 8px -2px #000000;
`

export const StyledDescription = styled.div`
  text-align: center;
`
export const StyledImg = styled.img`
  margin-top: 30px;
  width: 150px;
  border: solid 1px gray;
  border-radius: 50%;
  background-color: rgb(212, 212, 212);
`

export const StyledName = styled.p`
  display: block;
  font-size: 24px;
  font-weight: 500;
  padding: 5px 35px 5px 35px;
`

export const StyledInfo = styled.p`
  display: block;
  color: gray;
  padding: 3px 35px 3px 35px;
`

export const StyledStats  = styled.ul`
  flex-wrap: nowrap;
  width: 100%;
  height: 70px;
  display: flex;
  list-style: none;
  margin-block: 0;
  padding-inline-start: 0;
`

export const StyledItem = styled.li`
  text-align: center;
  width: calc(100% / 3);
  background-color: rgb(233, 229, 229);
  border: 1px solid rgb(209, 206, 206);
  padding: 10px 0px 10px 0px;
`

export const StyledLabel = styled.span`
  color: gray;
  font-size: 14px;
  display: block;
  padding: 4px 15px 0px 15px;
`

export const StyledQuantity = styled.span`
  font-weight: 700;
  display: block;
  padding: 0px 10px 4px 10px;
`

