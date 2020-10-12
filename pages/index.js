import useDarkMode from "use-dark-mode";
import "twin.macro";

const Home = () => {
  const darkMode = useDarkMode();

  return (
    <div tw="flex flex-col items-center justify-center h-screen">
      <button tw="text-heading" onClick={darkMode.toggle}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
