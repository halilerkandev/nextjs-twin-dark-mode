import { theme } from "twin.macro";
import { css, Global } from "@emotion/core";
import "tailwindcss/dist/base.min.css";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        background: var(--color-background);
      }

      body.light-mode {
        --color-heading: ${theme("colors.gray.900")};
        --color-background: ${theme("colors.gray.100")};
      }

      body.dark-mode {
        --color-heading: ${theme("colors.gray.200")};
        --color-background: ${theme("colors.gray.900")};
      }
    `}
  />
);

export default GlobalStyles;
