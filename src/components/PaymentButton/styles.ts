import styled, { css } from "styled-components";

interface PaymentButtonContainerProps{
  isActive: boolean;
}

export const PaymentButtonContainer = styled.button<PaymentButtonContainerProps>`
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

  ${props => props.isActive && css`
    background: ${props => props.theme.purpleLight};
    outline: 1px solid ${props => props.theme.purple};

    &:hover{
      background: ${props => props.theme.purpleLight};
    }
  `}
`
