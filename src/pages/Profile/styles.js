import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  height: 100vh;

  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "main"
    "footer"
  ;

`;

export const Main = styled.div`
  grid-area: main;

  .content {
    padding: 0 1rem;
  }

  .section1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;

    > img {
    width: 100%;

    border-radius: 3px;

    filter: brightness(0.4);
   } 

   .menu {
    display: flex;
    justify-content: center;
    gap: 1.8rem;

    margin-top: 1rem;

      > a {    
        font-size: 0.8rem;
        color: ${({ theme }) => theme.COLORS.BLACK};

        font-weight: 600;
      }

      .checked {
        color: ${({ theme }) => theme.COLORS.RED};
      }
    }
  }

  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 0.8rem;
      text-align: justify;

      margin-top: 1rem;
    }

    > img {
      width: 12rem;
      margin-top: 1.5rem;
    }

  }

  .section2 {
    > p {
      font-size: 0.8rem;
      text-align: justify;

      margin-top: 1.5rem;
    }
  }

  .item img {
    width: 100%;
    height: 15rem;

    object-fit: cover;

    margin-top: 1rem;
    border-radius: 3px;

    filter: brightness(0.4);
  }

  > li {
      display: flex;
      justify-content: center;
      gap: 3rem;

      background: ${({ theme }) => theme.COLORS.BROWN_100};
      font-size: 0.8rem;
      font-weight: 600;

      padding: 0.5rem 1rem;

      margin: 2rem 0 1rem;
  }

  @media(min-width: ${ DEVICE_BREAKPOINTS.XS }) {
    .content {
      max-width: 320px;
      margin: 0 auto;
    }
  }

  @media(min-width: ${ DEVICE_BREAKPOINTS.MD }) {
    .content {
      max-width: 500px;

      .section1 .profileImg {
        height: 35rem;

        object-fit: cover;
      }
    }
  }

  @media(min-width: ${ DEVICE_BREAKPOINTS.LG }) {
    .content {
      max-width: 70%;

      margin-top: 6rem;
    }

    .content .section1 {
      flex-direction: row;
      gap: 1rem;

      .menu {
        padding-bottom: 4rem;
        margin-top: 0;
      }

      .intro .logo {
        width: 16rem;
      }
    }

    .content .section2 {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      margin-top: 1.5rem;

      > p {
        width: 50%;

        margin-top: 0;
      }

      .item {
        margin-top: 0;

        width: 22rem;
        height: 100%;

        display: flex;
        flex-direction: column;

      }

      .item img {
          margin-top: 0;         
        
          flex-grow: 1;
          height: 20.2rem;
        }
    }

    .content .section3 {
      margin-top: 1.5rem;

      .item {
        height: 20.2rem;

        display: flex;
      }

      .item img {
        height: 100%;
        flex-grow: 1;
      }
    }

    > li {
      margin-top: 4rem;
    }
  }

  @media(min-width: ${ DEVICE_BREAKPOINTS.XG }) {
    .content {
      max-width: 50rem;
    }

    .content .section1 .menu {
      padding-bottom: 6.8rem;
    }

    .content .section1 .intro .logo {
      width: 18rem;
    }

    .content .section2 {
      margin-top: 2rem;
      
      > p {
        width: 40%;
      }

      .item {
        width: 28rem;
      }

   }
  }
`;

