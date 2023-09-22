import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-mini: 15px;
--font-size-11xl: 30px;
--font-size-lgi: 19px;
--font-size-5xl: 24px;

/* Colors */
--color-gray-100: rgba(0, 0, 0, 0.47);
--color-gray-200: rgba(0, 0, 0, 0.51);
--color-gray-300: rgba(0, 0, 0, 0.23);
--color-gray-400: rgba(0, 0, 0, 0.37);
--color-white: #fff;
--color-black: #000;
--color-mediumseagreen: #24a46e;

}
`;
