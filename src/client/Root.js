import App from "shared/App";
import React from "react";
import styled from "styled-components";

const Root = () => {
  return (
    <Layout>
      <Screen>
        <App />
      </Screen>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Screen = styled.div`
  width: 375px;
  height: 815px;
  padding: 0 30px;
`;

export default Root;
