import styled from "styled-components"
import { BaseCheckoutContainer } from "../../pages/Checkout/styles"

export const CoffeesSelectedContainer = styled(BaseCheckoutContainer)`
  width: 44.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  >div{
    width:100%;
    display: flex;
    justify-content: space-between;
    
    p{
      font-size: 1.4rem;
      line-height: 130%;

      color: ${props => props.theme.baseText};
    }
    &:last-child{
      font-size: 1.6rem;
    }

    strong{
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;

      color: ${props => props.theme.baseSubtitle};
    }
  }

  .confirmRequestLink{
    width: 100%;
    text-decoration: none;
    width: 100%;
    padding: 1.2rem .8rem;
    color: white;
    background: ${props => props.theme.yellow};
    border-radius: 6px;   

    font-size: 1.4rem;
    font-weight: 700;
    line-height: 160%;

    text-transform: uppercase;
    transition: background-color 200ms;

    &:hover{
      background: ${props => props.theme.yellowDark};
    }
  }

  .confirmRequestLink div{
    display: flex;
    justify-content: center;
    align-items: center;

    
  } 
`

export const CoffeeSelected = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.baseButton};

  padding-bottom: 2rem;
  margin-bottom: 3rem;

  img{
    width: 6.4rem;
  }

  >div{
    display: flex; 
    flex-direction: column;
    gap: 1rem;

    p{
      font-size: 1.6rem;
      line-height: 130%;

      color: ${props => props.theme.baseSubtitle};
    }

    >div{
      display: flex;
      gap: 1rem;

      >div{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .7rem;

        background-color: ${props => props.theme.baseButton};
        color: ${props => props.theme.baseTitle};

        font-size: 1.6rem;
        border-radius: 6px;

        button{
          background-color: transparent;
          border: none;
          color: ${props => props.theme.purple};
          font-size: 2rem;
          cursor: pointer;
          font-weight: 200;

          &:hover{
            color: ${props => props.theme.purpleDark};
          }
        }
      }

      >button{
        cursor: pointer;

        display: flex;
        flex: 1;
        align-items: center;
        padding: .5rem;
        gap: 1rem;

        background: ${props => props.theme.baseButton};
        border-radius: 6px;

        border: none;

        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%;
        text-transform: uppercase;
        color: ${props => props.theme.baseText};

        transition: background-color 200ms;
        
        &:hover{
          background: ${props => props.theme.baseHover};
        }
      }
    }
  }

  strong{
    padding-left: 3rem;

    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${props => props.theme.baseText};
  }

`