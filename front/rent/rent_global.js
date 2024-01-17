import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;

/* font sizes */
--font-size-mini: 15px;

/* Colors */
--color-white: #fff;
--color-darkgray: #aaa;
--color-gainsboro-100: #ddd;
--color-gray: rgba(0, 0, 0, 0.1);

}
`;
