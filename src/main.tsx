import Home from "./pages/home";
import JobDetails from "./pages/JobDetails";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import { GlobalStyles } from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyles />
    <React.StrictMode>
      <Header />
      <Routes>
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
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
