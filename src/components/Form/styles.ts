import styled from "styled-components";
import { BaseCheckoutContainer } from "../../pages/Checkout/styles";

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