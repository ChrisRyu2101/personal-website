import React from "react";
import styled from "styled-components";

const Selector = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #1a1a1a;
  padding: 5px 10px;
  border-radius: 5px;
  color: #00ff00;
`;

function LanguageSelector({ currentLanguage, setLanguage }) {
  return (
    <Selector>
      <button onClick={() => setLanguage("EN")} disabled={currentLanguage === "EN"}>EN</button> |
      <button onClick={() => setLanguage("JP")} disabled={currentLanguage === "JP"}>JP</button> |
      <button onClick={() => setLanguage("CN")} disabled={currentLanguage === "CN"}>CN</button>
    </Selector>
  );
}

export default LanguageSelector;
