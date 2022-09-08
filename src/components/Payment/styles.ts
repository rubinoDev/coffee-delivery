import styled from "styled-components";
import { BaseCheckoutContainer } from "../../pages/Checkout/styles";

export const PaymentContainer = styled(BaseCheckoutContainer)`
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