import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-image: url("https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg");
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Home = () => {
  return (
    <StyledBackground>
      <>
        <h1>Welcome to Potluck Planner!</h1>
        <p>A place to plan and organize a potluck with friends and family</p>
        <h4>Test</h4>
      </>
    </StyledBackground>
  );
};

export default Home;
