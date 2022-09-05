import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 3rem;

  nav{
    display: flex;
    justify-content: space-between;
  }

  nav > div{
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;

  padding: .5rem;

  border-radius: 8px;

  background-color: ${props => props.theme.purpleLight};

  strong{
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${props => props.theme.purpleDark};
  }
`

export const CartIcon = styled.div`
  background-color: ${props => props.theme.yellowLight};
  padding: .5rem;

  border-radius: 8px;

  cursor: pointer;
`