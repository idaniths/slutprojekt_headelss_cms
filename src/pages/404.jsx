import * as React from "react";
import { Link } from "gatsby";
import "../../styles/global.css";

const NotFoundPage = () => {
  return (
    <>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "rgb(37, 34, 34)",
          margin: "0",
        }}
      >
        <h1
          style={{
            fontSize: "8rem",
            background: "linear-gradient(80deg, #ee0000 0%, #ff8c00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>
        <h1 style={{ color: "white" }}>Page not found</h1>
        <Link
          to="/"
          style={{
            color: "rgb(202, 0, 0)",
            textDecoration: "none",
            fontSize: "1.8rem",
            marginTop: "1rem",
          }}
        >
          Go back to home
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
