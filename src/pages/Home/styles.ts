import styled from "styled-components";

export const HomeHeader = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 13rem;
`

export const HomeHeaderContent = styled.div`
  width: 50%;

  header{

    h2{
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 4.8rem;
      line-height: 130%;

      color: ${props => props.theme.baseTitle};

      margin-bottom: 1.5rem;
    }

    p{
      font-weight: 400;
      font-size: 2rem;
      line-height: 130%;

      color: ${props => props.theme.baseSubtitle};
      font-stretch: 100;

      margin-bottom: 7rem;
    }
  }
`

export const CoffeesMenu = styled.section` 
  div{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  h3{
    margin-top: 10rem;
    margin-bottom: 6rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${props => props.theme.baseSubtitle};
  }
`