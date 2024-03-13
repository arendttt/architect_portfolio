import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas: 
    "header"
    "main"
    "footer"
  ;

  > main {
    grid-area: main;


    > li {
      display: flex;
      justify-content: center;
      gap: 3rem;

      background: ${({ theme }) => theme.COLORS.BROWN_100};
      font-size: 0.8rem;
      font-weight: 600;

      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      
    }
  }



  @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
      > main li {
        gap: 6rem;
      }
  }


`;

export const Header = styled.div`
  grid-area: header;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 6rem;
  padding: 0 1rem;

  > img {
    width: 15rem;
  }

  .intro {
    padding-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    text-align: justify;

    > p {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }

  .menu {
    display: flex;
    gap: 1.8rem;

    > a {    
      font-size: 0.8rem;
      color: ${({ theme }) => theme.COLORS.BLACK};

      font-weight: 600;
    }

    .checked {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
    width: 80%;
    margin: 0 auto;

    padding-top: 6rem;

    > img {
      width: 16rem;
    }
  }

  @media (min-width: ${  DEVICE_BREAKPOINTS.LG }) {
    width: 80%;

    flex-direction: row;
    gap: 1rem;

    .menu {
      width: 100%;
      justify-content: flex-end;
    }
  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.XG }) {
    max-width: 60%;

    > img {
      width: 18rem;
    }
  }
`;

export const Grid = styled.div`
  margin: 2rem auto;
  padding: 0 1rem;
  gap: 3px;

  > div img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 3px;

    filter: brightness(0.4);
  }

  > div img:hover {
    scale: 1.01;
    transition: 0.5s;
  }

  .item {
    position: relative;
    display: inline-block;

    > a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  

      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      font-weight: 600;

      width: 60%;


      text-align: center;
      
    }

    > a:hover {
      color: ${({ theme }) => theme.COLORS.RED}; 
    }
  }

  .img01 {
    grid-area: img1;
  }

  .img02 {
    grid-area: img2;
  }  

  .img03 {
    grid-area: img3;
  }

  .img04 {
    grid-area: img4;
  }

  .img05 {
    grid-area: img5;
  }

 

  @media (min-width: ${  DEVICE_BREAKPOINTS.MD }) {
    max-width: 80%;

  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
    height: 45rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);

    grid-template-areas: 
    "img1 img1 img2"
    "img1 img1 img4"
    "img3 img3 img4"

  ;
  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.XG }) {
    max-width: 60%;

    min-height: 60rem;
  }

`;

