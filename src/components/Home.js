import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-image: url("https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg");
  height: 100vh;
  background-size: cover;
`;

const StyledH1 = styled.h1`
  color: #c1b759;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledP = styled.p`
  color: #c1b759;
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <StyledBackground>
      <StyledH1>
        <h1>Welcome to Potluck Planner!</h1>
      </StyledH1>
      <StyledP>
        <p>A place to plan and organize a potluck with friends and family</p>
      </StyledP>
    </StyledBackground>
  );
};

export default Home;
