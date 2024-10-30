import React from "react";
import styled from "styled-components";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: #00ff00;
`;

function Home({ language = "EN"}) {
  const content = {
    EN: { name: "Changzhou Long", desc: "PhD Student at University of Tsukuba | Quantum Computing and AI Enthusiast" },
    JP: { name: "龍 昶周", desc: "筑波大学博士課程学生 | 量子コンピューティング・AI技術ファン" },
    CN: { name: "龍 昶周", desc: "筑波大学博士研究生 | 量子计算・AI技術爱好者" }
  };

  return (
    <HomeContainer id="home">
      <h1>{content[language].name}</h1>
      <p>{content[language].desc}</p>
    </HomeContainer>
  );
}

export default Home;
