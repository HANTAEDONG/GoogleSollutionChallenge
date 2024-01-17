import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;

/* font sizes */
--font-size-xl: 20px;

/* Colors */
--color-white: #fff;
--color-darkgray: #aaa;
--color-gainsboro: #ddd;
--color-gray: rgba(0, 0, 0, 0.1);

}
`;
