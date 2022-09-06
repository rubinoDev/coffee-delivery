import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: flex;

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
export const BaseCheckoutContainer = styled.div`
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

export const FormContainer = styled(BaseCheckoutContainer)`
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
    }
  }
`