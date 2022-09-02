import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routers";
import ScrollToTop from "./data/ScrollToTop";
import { Suspense } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            className={`d-flex flex-column text-center align-items-center justify-content-center`}
            style={{
              position: "absolute",
              zIndex: 99999,
              height: "100%",
              width: "100%",
              background: "rgba(49, 135, 196, 0.3)",
            }}
          >
            <BounceLoader color={"#3187c4"} size={100} />
          </div>
        }
      >
        <ScrollToTop />
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
