import React from "react";
import styled from "styled-components";
import "../App.css";

const StyledBackground = styled.div`
  background-image: url("https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg");
  height: 100vh;
  background-size: cover;
  margin-top: 4rem;
`;

const StyledText = styled.div`
  color: #808000;
  width: 45vw;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  return (
    <StyledBackground>
      <div className='textContainer'>
        <StyledText>
          <h1>Potluck Planner</h1>
          <p>Plan and organize potlucks with friends and family</p>
        </StyledText>
      </div>
    </StyledBackground>
  );
};

export default Home;
