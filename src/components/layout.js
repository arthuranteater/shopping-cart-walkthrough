//CSS in React
import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const defaultCSS = `
body {
    margin: 0 auto
}`;

const styles = {
  container: {
    background: "blue",
  },
  container2: {
    background: "red",
  },
};

const LayoutGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 40px;
`;

const StyledDiv = styled.div`
  font-size: 30px;
  font-size: 50px;
`;

const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Layout = ({ children }) => {
  return (
    <>
      <style>{defaultCSS}</style>
      <LayoutGrid>
        <Header />
        <div>
          Main
          <MainRow
            style={{
              display: "inline-block",
              borderRadius: "3px",
              padding: "0.5rem 0",
              margin: "0.5rem 1rem",
              width: "11rem",
              background: "transparent",
              color: "white",
              border: "2px solid white",
            }}
          >
            {children}
          </MainRow>
        </div>
        <Footer copyright="2021" />
      </LayoutGrid>
    </>
  );
};

export default Layout;
