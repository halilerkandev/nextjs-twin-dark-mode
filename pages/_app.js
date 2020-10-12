import GlobalStyles from "../styles/global-styles";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
