import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        /* font-family: 'Lobster Two', cursive; */
    }

    p{
        padding: 0;
        margin: 0;
    }

    body{
        color: white;
        background: black;
    }

    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
