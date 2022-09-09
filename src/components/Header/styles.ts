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
  cursor: default;
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
  position: relative;

  background-color: ${props => props.theme.yellowLight};
  padding: .5rem;

  border-radius: 8px;

  cursor: pointer;

  transition: filter 200ms;

  &:hover{
    filter: brightness(1.03);
  }

  >div{
    position: absolute;
    transform: translate(22px, -13px);
    width: 2rem;
    height: 2rem;
    background-color: ${props => props.theme.yellowDark};
    color: white; 
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.06em;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1000px;
  }
`