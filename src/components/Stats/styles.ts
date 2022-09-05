import styled from "styled-components"

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;

  color: ${props => props.theme.baseText};

  > div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const Stat = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  div{
    padding: .5rem;
    background-color: red;
    border-radius: 50%;

    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .shoppingCart{
    background-color: ${props => props.theme.yellowDark};
  }

  .timer{
    background-color: ${props => props.theme.yellow};
  }

  .package{
    background-color: ${props => props.theme.baseText};
  }

  .coffee{
    background-color: ${props => props.theme.purple};
  }
`