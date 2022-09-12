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
export const BaseCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  
  padding: 4rem;
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

