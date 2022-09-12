import styled from "styled-components";

export const SuccessContainer = styled.section`
  margin-top: 10rem;

  h2{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${props => props.theme.yellowDark};
  }

  >p{
    font-size: 2rem;
    line-height: 130%;
    color: ${props => props.theme.baseSubtitle};
  }

  >div{
    display: flex;
    justify-content: space-between;
  }
`

export const DeliveryStatsContainer = styled.div`
  width: 52.6rem;
  margin-top: 5rem;
  padding: 5rem;
  
  background: 
    linear-gradient(#FAFAFA, #FAFAFA) padding-box,
    linear-gradient(to right, hsla(44, 71%, 52%, 1), hsla(259, 93%, 63%, 1)) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  >div{
    display: flex;
    gap: 2rem;

    .mapPin{
      padding: 1rem; 

      background-color: ${props => props.theme.purple};

      border-radius: 100%;

      display: flex; 
      justify-content: center; 
      align-items: center;
    }

    .timer{
      padding: 1rem; 

      background-color: ${props => props.theme.yellow};

      border-radius: 100%;

      display: flex; 
      justify-content: center; 
      align-items: center;
    }

    .dollar{
      padding: 1rem;  

      background-color: ${props => props.theme.yellowDark};

      border-radius: 100%;

      display: flex; 
      justify-content: center; 
      align-items: center;
    }

    >div p {
      font-size: 1.6rem;
      line-height: 130%;
      color: ${props => props.theme.baseText};

    }

    >div strong{
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 130%;
      color: ${props => props.theme.baseText};
    }
  }
`