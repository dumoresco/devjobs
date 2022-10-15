import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import Header from "./components/UI/Header";
import JobDetails from "./pages/JobDetails";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import light from "./themes/light";
import dark from "./themes/dark";
import AnimationLayout from "./components/AnimationLayout";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    console.log(theme);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path=":id"
              element={
                <JobDetails
                  id={0}
                  postedAt={""}
                  contract={""}
                  location={""}
                  company={""}
                  logo={""}
                  logoBackground={""}
                  position={""}
                  description={""}
                  requirements={{
                    content: "",
                    items: [],
                  }}
                  role={{
                    content: "",
                    items: [],
                  }}
                />
              }
            />
          </Route>
        </Routes>{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
