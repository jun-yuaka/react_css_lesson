/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: 2px solid #392eff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
    margin: 8px;
    border-radius: 20px;
  `;
  const titleStyle = css({
    color: "#3d84a8",
    margin: "0"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <Button>Figth!</Button>
    </div>
  );
};

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;
