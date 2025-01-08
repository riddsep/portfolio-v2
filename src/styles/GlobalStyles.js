import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}
::-webkit-scrollbar {
    display: none; 
  }

* {
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
li{
  list-style-type: none;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

 h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  font-family: "DM Sans", sans-serif;

}
p{
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;
export default GlobalStyles;
