import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: flex;
  gap: 2rem;

  h2{
    margin-top: 7rem;
    margin-bottom: 2rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;

    color: ${props => props.theme.baseTitle};
  }

  >div{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`
export const BaseCheckoutContainer: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem;
    gap: 3.2rem;

    width: 64rem;

    background: ${props => props.theme.baseCard};
    border-radius: 6px;

    header{
    display: flex;
    gap: .7rem;

    h4{
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;

      color: ${props => props.theme.baseTitle};
    }

    p{
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;

      color: ${props => props.theme.baseText};

      margin-bottom: 3rem;
    }
  }
`

export const FormContainer: any = styled(BaseCheckoutContainer)`
  form > div{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;

    input{
      box-sizing: border-box;

      padding: 12px;

      background: ${props => props.theme.baseInput};
      outline-color: ${props => props.theme.yellowDark};

      border: 1px solid #E6E5E5;
      border-radius: 4px;
    }

    .cep{
      width: 20rem;
    }

    .complemento{
      width: 100%;
    }

    >div{
      display: flex;
      gap: 1rem;

      >div{
        width: 100%;
        position: relative;
        &::after{
          content: "Opcional";
          font-style: italic;
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 130%;

          position: absolute;
          top: 1.25rem;
          right: 2rem;

          color: ${props => props.theme.baseLabel};
        }
      }
    }
  }
`

export const Payment = styled(BaseCheckoutContainer)`
  margin-bottom: 5rem;
  >div{
    width:100%;
    display: flex; 
    gap: 1.2rem;

    button{
      margin-top: -3rem;

      cursor: pointer;

      display: flex;
      flex: 1;
      align-items: center;
      padding: 1.6rem;
      gap: 1rem;

      background: ${props => props.theme.baseButton};
      border-radius: 6px;

      border: none;

      font-size: 1.1rem;
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
`

export const CoffeesSelectedContainer = styled(BaseCheckoutContainer)`
  width: 44.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  >div:not(:first-child){
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
  gap: 2rem;
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